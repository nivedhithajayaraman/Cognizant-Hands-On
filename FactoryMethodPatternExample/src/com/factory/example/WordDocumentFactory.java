package com.factory.example;
public class WordDocumentFactory extends DocumentFactory
{
    @Override
    public Document createDocument() {
        return new WordDocument();
    }
}
