create table students (stu_id serial,
					 stu_name varchar(60) not null,
					 stu_local varchar(30),
					 stu_birth date not null,
					 stu_gender char(1) not null,
					 stu_email varchar(30),
					 stu_cur_id int,
					 primary key (stu_id));
		     		     
create table courses (cur_id serial,
					 cur_name varchar(40) not null,
					 primary key (cur_id));
		           
create table departments (dep_id serial,
						    dep_name varchar(60) not null,
							dep_abbreviation char(3) not null,
							primary key (dep_id));	     
		           
create table units (unt_id serial,
						  unt_name varchar(40) not null,
					      unt_credits int not null,
						  unt_dep_id int,
						  primary key (unt_id));
		    
create table studyplans (pla_cur_id int not null,
						   pla_unt_id int not null,
						   pla_semester int not null,
						   primary key (pla_cur_id, pla_unt_id));		
		            		                 		     
create table registrations (ins_id serial,
						 ins_stu_id int not null,
						 ins_pla_cur_id int not null,
						 ins_pla_unt_id int not null,
						 ins_dt_inscricao date not null,
						 ins_dt_avaliacao date,
						 ins_nota decimal(4,2),
						 primary key (ins_id));

-- Foreign keys
alter table students add constraint students_fk_courses
            foreign key (stu_cur_id) references courses(cur_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table units add constraint units_fk_departments
            foreign key (unt_dep_id) references departments(dep_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table studyplans add constraint studyplans_fk_courses
            foreign key (pla_cur_id) references courses(cur_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;            
            
alter table studyplans add constraint studyplans_fk_units
            foreign key (pla_unt_id) references units(unt_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;            

alter table registrations add constraint registrations_fk_students
            foreign key (ins_stu_id) references students(stu_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION; 
                        
alter table registrations add constraint registrations_fk_studyplans
            foreign key (ins_pla_cur_id,ins_pla_unt_id) references studyplans(pla_cur_id,pla_unt_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION; 

