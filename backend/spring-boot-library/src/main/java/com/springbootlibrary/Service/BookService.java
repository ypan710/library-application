package com.springbootlibrary.Service;

import com.springbootlibrary.dao.BookRepository;
import com.springbootlibrary.dao.CheckoutRepository;
import com.springbootlibrary.entity.Book;
import com.springbootlibrary.entity.Checkout;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
public class BookService {

    private BookRepository bookRepository;
    private CheckoutRepository checkoutRepository;

    public BookService(BookRepository bookRepository, CheckoutRepository checkoutRepository){
        this.bookRepository = bookRepository;
        this.checkoutRepository = checkoutRepository;
    }

    public Book checkoutBook(String userEmail, Long bookId) throws Exception {

        // obtain optional book from database by id
        Optional<Book> book = bookRepository.findById(bookId);

        // call the database by user email and book id
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
        if (!book.isPresent() || validateCheckout != null || book.get().getCopiesAvailable() <= 0){
            throw new Exception("Book doesn't exist or already checked out by user;");
        }

        // decrease the book count by one
        book.get().setCopiesAvailable(book.get().getCopiesAvailable() - 1);

        // save book repository to database
        bookRepository.save(book.get());
        // create a new checkout record
        Checkout checkout = new Checkout(
                userEmail,
                LocalDate.now().toString(),
                LocalDate.now().plusDays(7).toString(),
                book.get().getId()
        );

        // save new checkout record to database
        checkoutRepository.save(checkout);

        // return the book
        return book.get();
    }

    public Boolean checkoutBookByUser(String userEmail, Long bookId){
        Checkout validateCheckout = checkoutRepository.findByUserEmailAndBookId(userEmail, bookId);
        if (validateCheckout != null){
            return true;
        }
        return false;
    }

    public int currentLoansCount(String userEmail){
        return checkoutRepository.findBooksByUserEmail(userEmail).size();
    }
}
