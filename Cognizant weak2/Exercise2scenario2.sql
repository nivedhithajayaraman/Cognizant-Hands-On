CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_DepartmentID IN NUMBER,
    p_BonusPercent IN NUMBER
) IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_BonusPercent / 100)
    WHERE DepartmentID = p_DepartmentID;

    COMMIT;
END;


EXEC UpdateEmployeeBonus(10, 10); 

SELECT * FROM Employees;