using System;

namespace _0422_Classes
{
    public class Person
    {
        // A couple of fields
        public string FirstName;
        public string LastName;

        // A method
        public void Introduce()
        {
            Console.WriteLine("My name is " + FirstName + " " + LastName);
        }
    }
}
