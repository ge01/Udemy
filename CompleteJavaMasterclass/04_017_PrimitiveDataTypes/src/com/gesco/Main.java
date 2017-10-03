package com.gesco;

public class Main {

    public static void main(String[] args) {

        // int has a width of 32
        int myMinValue = -2_147_483_648;
        int myMaxValue =  2_147_483_647;
        int myTotal = (myMinValue/2);
        System.out.println("myTotal = " + myTotal );

        // byte has a width of 8
        byte myByteValue = -128;
        byte myNewByteValue = (byte) (myByteValue/2);
        System.out.println("myNewByteValue = " + myNewByteValue);

        // short has a width of 16
        short myShortValue = -32767;
        short myNewShortValue = (short) (myShortValue / 2);

        // long has a eidth of 64
        long myLongValue = 9_223_372_036_854_775_807L;

        // 1. Create a byte variable and set it to any valid byte number.
        byte byteNum = 41;

        // 2. Create a short variable and set it to any valid short number.
        short shortNum =  12345;

        // 3. Create a int variable and set it to any valid int number.
        int intNum = 123456789;

        // 4. Create a variable of the long, and make it equal to
        //    50000 + 10 times the sum of the byte, plus the short plus the int
        long longNum = 50000L + 10l * (byteNum + shortNum + intNum);
        System.out.println("longNum = " + longNum);

    }
}
