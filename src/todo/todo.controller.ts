import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { AppService } from 'src/app.service';
import {CreateTodo, UpdateDto} from './todo.dto'
import { TodoPipe } from './todo.pipe';

@Controller('todo')
export class TodoController {
//     constructor(private appService: AppService) {}
//  @Get("/data")
//     createTodo(){
//         return this.appservice.createTodo();
//     }
constructor(private readonly appService:AppService) {}

 private todos=[];//we create an empty array which is private as we are creating in class we have to mentioned this

 @Get("user/:id") //Here we craete an get request on the given path
 @UsePipes(TodoPipe) //In this we delacre the the method Usepipes and in that we pass the function that we get in creting an middleware for todo by running command we write taht function name inside the it
 getUserById(@Param('id') id:number ){
    return {id};              //here we return the id which pass by the user in param url to the function Todopipe as it is an middleware function
 }

 @Get("user/:id/:slug")
 

 @Post("/data")
createTodo(@Body() data: CreateTodo) {
    const item={
        id:Date.now(),
        ...data,
        createAt:new Date().toLocaleString(),
        isComplete:false
    }
    this.todos.push(item)
    return {msg:"todo is created "};
}

@Get("/get-todos")
getAllTodos() {

    return {
        todos:this.todos,
        total:this.todos.length,
        msg:"todo is fetched"};
}
@Put("/update/:id") //here we add param in the path like here param is "id" we have to pass url like this to use put request "http://localhost:3000/todo/update/1" here 1 is id
updateTodoById(@Param('id') id:number,@Body() data:UpdateDto) { //1.here we have to the @Param and id and its data type and 2.here we craete an body as we have to pass the change which we want that is why and 3.In this we pass the function same we pass above updateDto 
       const new_todo=this.todos.map((curr,i)=>{  //we apply the map function on the todos which is an array of object
        if(curr.id == id){  //find id that is matched with the id pass in path param by user
            return {                //return after updating the name  
                ...curr,        //spred operator 
                ['name']:data.name,
                isComplete:true
            }
        }
        return curr    
       })
       this.todos=new_todo; //we update our todos withe the new_todo; 
    return {
        msg:"todo is updated"
}
}
@Delete("/delete/:id")  //By this we delete the item on the basis of the id 
deleteTodoById(@Param('id') id:number){  //here we have to pass param as we are using it in the path of delete mentioned above and 2.In this body is not required so we not used it
         const new_todo=this.todos.filter((c)=>c.id!=id) //we use filter as to delte the item as map and filter are higher order function because map,filter both are function but it also used anonymous function inside it.
         this.todos=new_todo; //update todos after deleting the item .
         return {msg:"todo is Deleted"}
}
}

 