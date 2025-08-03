CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance * 1.01
    WHERE AccountType = 'SAVINGS';

    COMMIT;
END;


EXEC ProcessMonthlyInterest;

SELECT * FROM Accounts;