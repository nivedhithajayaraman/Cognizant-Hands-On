package com.library.LibraryManagement;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {
    public static void main(String[] args) {
        // Load Spring XML configuration
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService bean and use it
        BookService bookService = context.getBean("bookService", BookService.class);
        bookService.addBook("Clean Code by Robert C. Martin");
    }
}
