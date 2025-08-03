package com.factory.example;
public class PdfDocumentFactory extends DocumentFactory {
    @Override
    public Document createDocument()
    {
        return new PdfDocument();
    }
}
