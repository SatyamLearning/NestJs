//dto=data type object

import { IsEmail, isEmpty, IsEmpty, IsNotEmpty } from "class-validator";

export class CreateTodo{  //here we make an class name as same as our function foe which we are using it
    @IsNotEmpty({message:'Name toh chaiye '}) //We use this IsNotEmpty so that name should be empty always we have to provide the name and we can also pass the message which is shown when we user does not enter name 
    name:string //here we write the name and its data type that is string
     
    @IsEmail() //It is use to valiadate that email is in correct foramat or not like gmail.com,yahoo.com etc.
    @IsNotEmpty({message:'email must pass in correct format'})
    email:string
}

export class UpdateDto{ //This is an function that is craeted to update the name 
    @IsNotEmpty()
    name:string
}