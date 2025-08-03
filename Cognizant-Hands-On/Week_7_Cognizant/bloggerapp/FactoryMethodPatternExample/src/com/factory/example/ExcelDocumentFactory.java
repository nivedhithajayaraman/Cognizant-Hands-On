package com.factory.example;
public class ExcelDocumentFactory extends DocumentFactory 
{
    @Override
    public Document createDocument() 
    {
        return new ExcelDocument();
    }
}
