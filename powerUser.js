// TOPIC: SHELL

// TODO: all tables (eg. TABLE 1.5)

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

// SUB: Connecting command

// Pipe | (connect output of one command to input of other)
// TERM: ls /usr/bin | sort -f | less 

// Sequencial commnd ; (run commands one after another)
// TERM: date ; troff -me {filename} | 1pr ; date (troff -> format file, 1pr -> print the output of troff)

// Background command &
// TERM: troff -m {filename} &  (format file in background and not bloack the shell)

// SUB: Expanding command

// command substitution $() or "" -> allowing output of command taken as argument by shell itself instead of other command
// TERM: nvim $(find /home | grep xyz)  -> open file containing xyz inside /home then open it in nvim  

// Expanding arathmethic operations $() or $[]
// TERM: echo "I am $[90-78] years old"
// TERM: echo "There are $(ls | wc -w) files in this folder"  -> wc (count)

// Expanding environment variables $
// TERM: ls -l $BASH  -> -l (long format)

// SUB: Shell variables

// variables -> can only be used in shell in which they are defined  
// environment variable -> can be used in other shells 
// TERM: env 
// TERM: echo ${env name} 

// TERM: alias r='rm -i'
// TERM: alias
// TERM: export PROMPT_COMMAND='date' (export -> set env variable, PROMPT_COMMAND= env variable which display something after typing every command)
// TERM: export TMOUT='20' (exit the shell after 20s if left idle)

// SUB: Creating Shell environment

// to change /etc/profile or /etc/bashrc you must be root user
// /etc/profile.d/custom.sh -> add  settings instead of editing the actual file /etc/profile

// $HOME/.profile, $HOME/.bashrc  -> user specific settings

// to persist for eg. alias put it inside .bashrc of bashrc file (global) 
// nvim $HOME/.bashrc -> alias d='date'

// in shell before $ or ~ -> the name of current user followed by current directory
// .bashrc -> export PS1="[\t \w]\$ "   (change the look before "$" in terminal, \t -> time, \w -> full path, \$ -> $)
// .bashrc -> TMOUT=30  (set env variable, TMOUT -> close shell after 30s of idle time)
// .bashrc -> PATH=$PATH:/getstuff/bin ; export PATH   (add /getstuff/bin to PATH, $PATH -> read the current path)

// .bashrc -> M=/work/time/files/info/memos ; export M   (now you can access this folder by $M, eg. cd $M )

// ls --help (or -h)

// man ls (info about command)
// section 1 of man page -> for regular users
// section 5,8,4 -> for administrators
// section 2,3 -> for programmers
// man 5 ls (see section 5 of man page)

// TOPIC: FILESYSTEM

// filesystem -> where all info about computer is stored
// "/" -> root directory (not root user)

// SUB: Linux vs mac-windows filesystem

// "\" -> Linux, "/" -> MAC
// 3 character or less suffix have no meaning in linux eg. .txt, only the "permissions" of file specfies it's executable nature
// linux files and directories have permissions and ownerships attached

// when you open a shell you are placed in "home" directory
// cd /usr/home (starts with a / so "absolute path")
// cd ~ (home directory)
// mkdir {folder}
// ls -ld {folder} (d -> directory)
// chmod 700 {folder} (chmod -> change permission, 700 -> give you full access other's has no access)
// touch {filename}

// SUB: Metacharacters 

