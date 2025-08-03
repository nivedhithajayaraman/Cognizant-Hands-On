CREATE OR REPLACE PROCEDURE TransferFunds(
    p_FromAccountID IN NUMBER,
    p_ToAccountID   IN NUMBER,
    p_Amount        IN NUMBER
) IS
    v_FromBalance NUMBER;
BEGIN
    -- Check source account balance
    SELECT Balance INTO v_FromBalance
    FROM Accounts
    WHERE AccountID = p_FromAccountID
    FOR UPDATE;

    IF v_FromBalance < p_Amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient funds.');
    END IF;

    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - p_Amount
    WHERE AccountID = p_FromAccountID;

    -- Add to destination
    UPDATE Accounts
    SET Balance = Balance + p_Amount
    WHERE AccountID = p_ToAccountID;

    COMMIT;
END;

EXEC TransferFunds(101, 103, 200); 

SELECT * FROM Accounts;