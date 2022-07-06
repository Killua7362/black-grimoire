---
tags : rust 
---

## Function Defination
```
fn main() {
    println!("Hello, world!");
}
```

## prelude
	These are just small important components used in rust library


```
use std::io;
This imports io from std library
```

```
fn main(){
let mut var=String::new(); 

 - default var are immutable so use *mut* to make it mutable
 - new is instance of String class so here var is mutable string variable

```
```
io::stdin()
    .read_line(&mut var)
    .expect("Failed to read line");

println!("my guess is {}",var);

 - stdin in part of io library
 - here read_line is the method which is taking reference of mutable variable
 - & is the reference to avoid copy
 - with some error handling
}
```

```
After downloading random crate
use rand::Rng; 

rng means random number generator
```

```
rand::thread_rng().gen_range(1..101);
thread_rng means creating it locally
```

```
for infinite loop
loop{} 
```

```
Comparing guess_no and var

use std::cmp::Ordering;
match var.cmp(&guess_no){
	Ordering::Less=>println!("Lesser"),
	Ordering::Equal =>{
		break;
	},
	Ordering::Greater=>println!("Greater"),
}

```

```
Explicitly mention data type
float-32 bit
let var:f32 = 3.2;

```


```
let x = (x1,x2,x3)
x.0,x.1,x.2 gives 3 elements
```

```
let a:[i32;5] =[1,2,3,4,5]
let a=[3;5]; //here array will have 5 threes
```

- Array Indexing a[0]
- Tuple Indexing a.0

