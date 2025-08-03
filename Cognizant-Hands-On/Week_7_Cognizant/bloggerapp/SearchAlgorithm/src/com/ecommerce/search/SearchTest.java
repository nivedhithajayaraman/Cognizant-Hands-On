package com.ecommerce.search;
public class SearchTest {
    public static void main(String[] args) 
    {
        Product[] products = {
            new Product(101, "Shoes", "Footwear"),
            new Product(102, "T-shirt", "Apparel"),
            new Product(103, "Laptop", "Electronics"),
            new Product(104, "Watch", "Accessories"),
            new Product(105, "Bag", "Travel")
        };

        System.out.println("🔍 Linear Search:");
        Product linearResult = LinearSearch.search(products, "Shoes");
        System.out.println(linearResult != null ? linearResult : "Product not found");

        System.out.println("🔍 Binary Search:");
        Product binaryResult = BinarySearch.search(products, "Laptop");
        System.out.println(binaryResult != null ? binaryResult : "Product not found");
    }
}
