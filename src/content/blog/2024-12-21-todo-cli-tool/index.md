---
title: 'My Task ToDo CLI Tool...'
seoTitle: 'My Task ToDo list CLI tool guide.'
slug: 'my-task-todo-cli-tool'
description: 'Mytask is a straightforward command-line tool designed to help you manage your daily tasks efficiently.'
pubDate: '2024-12-21'
updatedDate: '2024-12-21'
tags: ["Cli", "Tool", "Golang"]
coverImage: './blog-cli-image.jpg'
---

## Introduction
MyTask is a modern, lightweight task management application designed for developers who prefer working in a terminal environment. Built with Go, it combines the simplicity of command-line interfaces with powerful task management features.

![Project Image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/t0be7gyrj9g054io4b1m.png)
## Why MyTask?
In a world of complex task management solutions, MyTask stands out by embracing Unix philosophy: do one thing and do it well. Whether you're organizing code-related tasks, managing bug fixes, or planning features, MyTask provides a distraction-free environment for staying productive

## Key Features
- **Minimal and Fast:** Written in Go for exceptional performance and low resource usage
- **Terminal-First:** Seamless integration with your existing terminal workflow
- **Git-Style Commands:** Familiar command syntax for developers (`mytask add, mytask list, etc.`)
- **Cross-Platform:** Runs on Linux, macOS, and Windows
- **Data Portability:** Store your tasks in plain text files, easily sync across devices
- **Customizable:** Extensive configuration options while maintaining simplicity

## Project Stricture:
```md
mytask/
├── cmd/
│  └── add.go    # Add a task
│  └── delete.go # Delete task
│  └── help.go   # View commands
│  └── init.go   # Initialize
│  └── list.go   # List tasks
│  └── update.go # Update task status
│  └── util.go   # Reuse package
│
├── todo
│  └── todo.go   # Switch case impl
│    
├── README.md
├── go.mod
├── go.sum
└── main.go      # Main file
```
## Project Setup
- **Create a Project Directory:**
```
mkdir mytask
```
- **Navigate to the directory:**
```
cd mytask
```
- **Initialize a Go Module:**
```bash
go mod init github.com/dev-dhanushkumar/golang-projects/mytask
```
- **SimpleTable Package:**
Simpletable is a simple, lightweight Go library for creating beautiful CLI tables. It's particularly well-suited for our task management application as it provides clean, formatted output for task listings.
```bash
 go get github.com/alexeyco/simpletable
```
- **Create folders and Files based on Project structure:** This file structure provides a solid foundation for your project.

## Implementation
### 1. Add Task
Adding a new task to a todo list. It utilizes the flag package to handle command-line arguments and the todo package (likely located elsewhere) to manage the actual todo list data.
```go
func AddTask(todos *todo.Todos, args []string) {
	// Define the  "add" subCommand to add todo item
	addCmd := flag.NewFlagSet("add", flag.ExitOnError)
	addTask := addCmd.String("task", "", "The content of new todo item")

	// Define an optional "--cat" flag for the todo item
	addCat := addCmd.String("cat", "Uncategorized", "The category of the todo item")

	// Parse the argument for the "add" subcommand
	addCmd.Parse(args)

	// Check if the required todo text was provided

	if len(*addTask) == 0 {
		fmt.Println("Error: the --task flag is required for the 'add' subcommand.")
		os.Exit(1)
	}

	//Get the todo text from the positional argument
	todos.Add(*addTask, *addCat)
	err := todos.Store(GetJsonFile())
	if err != nil {
		log.Fatal(err)
	}

	todos.Print(2, "")
	fmt.Println("Todo item added successfully.")
}
```
### 2. Delete Task
Deleting existing tasks from the todo list. It likely uses the flag package to handle command-line arguments and interacts with the todo package to manage the todo list data.
```go
func DeleteTask(todos *todo.Todos, args []string) {
	deleteCmd := flag.NewFlagSet("delete", flag.ExitOnError)
	// If no --id=1 flag defined todo will default to 0
	deleteID := deleteCmd.Int("id", 0, "The id of todo to be deleted")

	// Parse the argument for the "delete" subcommand
	deleteCmd.Parse(args)

	err := todos.Delete(*deleteID)
	if err != nil {
		log.Fatal(err)
	}

	err = todos.Store(GetJsonFile())
	if err != nil {
		log.Fatal(err)
	}

	todos.Print(2, "")
	fmt.Println("Todo item deleted successfully.")
}
```
### 3. List Task
In the context of a command-line todo list application like MyTask, the "list" command typically refers to the action of displaying the current list of todo items to the user. Based on below description we display the our task list.
```go
func ListTasks(todos *todo.Todos, args []string) {	
	// Define the "list" subcommand to list todo items
	listCmd := flag.NewFlagSet("list", flag.ExitOnError)
	listDone := listCmd.Int("done", 2, "The status of todo to be printed")
	listCat := listCmd.String("cat", "", "The category of tasks to be listed")

	// Parse the arguments for the "list" subcommand
	listCmd.Parse(args)
	todos.Print(*listDone, *listCat)
}
```
- **Example:**
```
# Command to list all tasks
mytask list 

# Output (example)
1. Buy groceries
2. Schedule doctor's appointment
3. Finish report
4. Learn Go programming 
```

### 4. Update Task
This functionality for updating an existing task in the todo list and update the task status. It utilizes the flag package to handle command-line arguments and interacts with the todo package (likely located elsewhere) to manage the actual todo list data.
```go
func UpdateTask(todos *todo.Todos, args []string) {	
	updateCmd := flag.NewFlagSet("update", flag.ExitOnError)
	updateID := updateCmd.Int("id", 0, "The id of todo to be updated")
	updateCat := updateCmd.String("cat", "", "The to-be-updated category of todo")
	updateTask := updateCmd.String("task", "", "To to-be-updated content of todo")
	updateDone := updateCmd.Int("done", 2, "The to-be-updated status of todo")

	// Parse the arguments for the "update" subcommand
	updateCmd.Parse(args)

	if *updateID == 0 {
		fmt.Println("Error: the --id flag is required for the 'update' subcommand.")
		os.Exit(1)		
	}
	err := todos.Update(*updateID, *updateTask, *updateCat, *updateDone)
	if err != nil {
		log.Fatal(err)		
	}

	err = todos.Store(GetJsonFile())
	if err != nil {
		log.Fatal(err)
	}

	todos.Print(2, "")
	fmt.Println("Todo item updated successfully.")
}
```
## Installation and Usage:
For detailed installation and usage instructions, please refer to the README.md file in the project repository: [Github link](https://github.com/dev-dhanushkumar/Golang-Projects/tree/main/golang_task)

## Conclusion
This project successfully creates the core functionality of the MyTask application. Through this process, I gained valuable experience in **Go programming, command-line interface development, and project management**. I learned to overcome challenges like **implementing efficient task storage, File parse, Local Storage** and effectively utilize the **Go standard library**. This project serves as a valuable learning experience and a foundation for further development in the area of task management applications.