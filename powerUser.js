// TOPIC: SHELL

// most linux distro comes with bash shell by default (Bourne again shell -> named after Bounce shell from UNIX)
// 3 ways to access shell -> shell prompt, terminal, virtual console
// most distros uses GNOME terminal by default
// ctrl + alt + f3/f4/f5/f6 -> to access different virtual consoles 

// TERM: who am i  
// TERM: grep sachin /etc/passwd -> details about user, which shell you are using 
// download different shell using dnf eg> "ksh"
// TERM: ksh (enter ksh)
// TERM: exit (exit ksh) 
// TERM: man bash (know more about a shell)
// TERM: date 
// TERM: pwd 
// TERM: hostname 
// TERM: ls 
// TERM: ls -lat (l -> long format, a -> hidden files, t -> sort by time )
// TERM: ls --help (without double hyphen h,e,l,p would be considered seperate options)

// SUB: Structure of command 

// ls -> command 
// -a -> option 
// /etc/passwd -> argument 

// TERM: tar -cvf config.tar .config  (c -> create, f -> file, v -> verbose. .config -> from content of this folder)

// TERM:  id 
// uid -> user name and id 
// gid -> user's primary group and it's id 
// groups -> other groups user belongs to 
// prmissions (later) 

// TERM: who -uH (u -> info about idle time, H -> print header of table)
// tty1 -> virtual console 
// comment -> the name of remote machine from which logged in  

// TERM: tree

// SUB: Where do commands live

// to find the command you typed shells looks in your "path"
// for commands not in your path you can type the location 
// TERM: /bin/date
// the path consists of directories which are checked in sequence 
// TERM: echo $PATH (to see your current path)
// most linux commands are located in /bin or /usr/bin or /usr/local/bin folder
// /sbin or /usr/sbin (where administrative commands are found)
// to add your own shell script, add it inside /home/sachin/bin folder, this location will be automatically added in your path 
// if /home/sachin/bin or some other directory where you placed you script is not added in your path then you need to add maunally
// unlike other OS linux don't look for scripts in current working directory and then find it in path
// it directly looks for commands inside path 
// the directories are checked from left to right in PATH
// if there are multiple same commands then type the complete location of command you want to execute
// or you can changes the sequence in you PATH

// order of command execution -> aliases, shell reserved word (eg. do, while, else), built in commands, filesystem commands (custom commands)

// SUB: Shortucts
//
// TERM: type ls (location of command in path)
// TERM: type -a ls  (all locations of command in path )
// locate ls (find location of command not included inside path)
// TERM: history (previously used commands)
// TERM: history 8 (last 8 commands)
// TERM: history !{command number}  (run the command)
// TERM: !! (run previous command)
// TERM: !?sort? (run command containing "sort")
// TERM: ctrl + r (find history by keyword)

// TERM: .bashrc -> set -o vi (to changes the bash command line editor from emacs)  
// TERM: ctrl + a (move to beginning of command)
// TERM: ctrl + e (end of command)
// TERM:  ctrl + d (delete one character)
// TERM: alt + f/b (move one word forward/backward)
// TERM: clrl + l (clear screen)
// TERM: ctrl + k (cut to end of line)
// TERM: ctrl + u (cut to beginning of line)
// TERM: ctrl + y (paste)

// $ + tab (autocomplete variable for current shell)
// ~ + tab (automcomplete username)
// @ + tab (autocomplete hostname)

// fc 100 105 (open the command history from 100 to 105 in a file)
// when you quite the file all these commands will be executed line by line

// .bash_history (where all history of commands is stored)

// SUB: Connecting and expanding command

// Pipe | (connect output of one command to input of other)
// TERM: ls /usr/bin | sort -f | less 

// Sequencial commnd ; (run commands one after another)
// date ; troff -me {filename} | 1pr ; date (troff -> format file, 1pr -> print the output of troff)

// Background command &
// troff -m {filename} &  (format file in background and not bloack the shell)

// command substitution $() -> allowing output of command taken as argument by shell itself instead of other command
// nvim $(find /home | grep xyz)  


