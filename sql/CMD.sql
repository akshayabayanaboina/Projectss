create database info;
use info;
create table country (
    c_id int primary key,
    c_name varchar(100)
);
create table  state (
    s_id int primary key,
    s_name varchar(100),
    c_id int,
    foreign key (c_id) references country(c_id)
);
create table city (
    c_id int primary key,
    c_name varchar(100),
    s_id int,
    foreign key(s_id) references state(s_id)
);
create table student (
    s_id int primary key,
    s_name varchar(100),
    age int,
    c_id int,
    foreign key (c_id) references city(c_id)
);
insert into country values(1, 'USA'), (2, 'India');
insert into state  values(1, 'California', 1), (2, 'Texas', 1),(3, 'Maharashtra', 2),(4, 'Gujarat', 2);
insert into city values (1, 'Los Angeles', 1),(2, 'Houston', 2),(3, 'Mumbai', 3),(4, 'Ahmedabad', 4);
insert into student values (1, 'akki', 20, 1),(2, 'thanu', 22, 2),(3, 'anu', 21, 3), (4, 'vasu', 23, 4);
select*from country;
select*from state;
select*from  city;
select*from student;
show tables;
select * from student order by age desc;
select * from state order by s_id asc;
select * from student where age > 21;
select avg(age) from student;
select max(age) from student;
select  * from student where s_name like 't%';
select * from  student where age = (select max(age) from student);
select * from  student where age =(select min(age) from student);
update student set age = 25 where s_id = 4;
select*from student;
update country set c_name="us" where c_id=1;
select*from country;
delete from student where s_id = 3;
drop table city;
alter table student add email varchar(100);
update student  set email = 'akki@gmail.com' where s_id = 1;
alter table student add unique (email);
select * from  student where s_id between 19 and 23;

select distinct c_id,c_name from city;
select * from  state order by s_id desc limit 2;
select  age, count(*) from student group by age having count(*)>1;
select s.s_name, c.c_name from student s inner join city c on s.c_id=c.c_id;
select s.s_name, c.c_name from student s left join city c on s.c_id=c.c_id;
select s.s_name, c.c_name from student s right join city c on s.c_id=c.c_id;

select s.s_name, c.c_name, st.s_name, co.c_name
from student s
join city c on s.c_id = c.c_id
join state st on c.s_id = st.s_id
join country co on  st.c_id = co.c_id
where co.c_name in ('USA', 'India');

select s.s_name, s.age
from student s
join city c on s.c_id = c.c_id
where c.s_id in (select s_id from state where c_id = 1);

select s.s_name, st.s_name
from  student s
join city c on s.c_id = c.c_id
join State st on c.s_id = st.s_id
where st.s_id in (1, 3,4);

select st.s_id,st.s_name AS student_name,ci.c_name AS city_name,s.s_name AS state_name,co.c_name AS country_name
from student st inner join city ci ON st.c_id = ci.c_id right join state s ON ci.s_id = s.s_id
left join country co ON s.c_id = co.c_id;

select COUNT(*) AS total_students
from  student st inner join city ci ON st.c_id = ci.c_id left join  state s ON ci.s_id = s.s_id 
left join country co ON s.c_id = co.c_id;