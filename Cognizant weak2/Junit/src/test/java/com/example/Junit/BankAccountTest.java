package com.example.Junit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class BankAccountTest {

    private BankAccount account;

    @Before
    public void setUp() {
        account = new BankAccount(100);
        System.out.println("Setup: New BankAccount with balance 100");
    }

    @After
    public void tearDown() {
        System.out.println("Teardown: Test completed");
    }

    @Test
    public void testDeposit() {
        account.deposit(50);
        assertEquals(150, account.getBalance());
    }

    @Test
    public void testWithdraw() {
        account.withdraw(30);
        assertEquals(70, account.getBalance());
    }
}
