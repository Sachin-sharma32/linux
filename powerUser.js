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

// helps work with files more easily
// TERM: ls a*  (files starting with a)
// TERM: ls a*t (starting with a and enting with t)
// TERM: ls ?????a (start with any 5 characters and ends with a)
// TERM: ls [abw]*  (any file starting with a, b or w)
// TERM: ls [a-d]* (any file starting with characters between a and d)
// TERM: mail root < ~/.bashrc  ("<" -> send the content of .bashrc file to mail )
// TERM: man chmod |  col -b > /tmp/chmod   (">" -> send the output of man page with removed bland space (col -b) to /tmp/chmod, replacing it's content)
// ">>" -> don't replace the content 

// HERE DOCUMENT
// TERM: mail root << thetext ------------------ thetext  ("<<" -> sent the text between thetext and thetext as mail to root user)

// TERM: touch index{1,2,3,4,5}  (create file index1 to index5)
// TERM: touch {a,b,c}-{a,b,c}  (a-a, a-b, a-c..............)

// SUB: Listing files/directories
// TERM: alias ls  (check if "ls" is aliased)
// TERM: ls -al (permission starting with "-" -> file, "d" -> directory)
// col1 -> permissions
// col2 -> number of hard links to that file/folder
// col3 -> owner
// col4 -> group with owner belongs to 
// col5 -> size in bits
// col6 -> last modified date
// "s" instead of "x" in permissions -> executable by any user, but only by perticular user/group
// drwx------t  ("t" -> at the end of directory, sets "sticky bit" -> owner of directory can allow other users to add files/directory to this direcotry, users cannot delete each other's files/folders inside this directory)
// -rwx------+ ("+" -> some extended attribute is set on the file like "Access Control List")
// -rwx------. ("." -> SELinux(Security Enhanced Linux) is set on file, adds "access control" to file to improve safety)
// TERM: ls -tF  ("t" -> display in order of most recently used, "F" -> adds "/" -> directory, "*" -> executable, "@" -> symbolic link)
// TERM: ls --hide=a* 
// TERM: ls -ld  ("d" -> display info about folder instead of showing it's files/folders)

// SUB: permissions

// 9 bits assigned to a file -> -rwxrwxrwx define permission 
// first  rwx -> owner's permission, sedond -> group's permission, thirid -> all others users 
// TERM: chmod 755 {filename} -> (change permission of file, 7 -> owner (r -> 4, w -> 2, x -> 1 = 4+2+1), 5 -> group, 5 -> other users)
// TERM: chmod -R 755 {folder} -> change permission of all the files in the folders
// TERM: chmod a-w {filename} -> remove "-" write "w" permission from all "a" users (u -> current user, g -> group, o -> others)
// TERM: chmod go-rwx
// -rw-rw-r-. (default file permission)
// rwxrwxr-x (default folder permission)
// TERM: umask  (see default permission) 
// TERM: umask 022 (change permission temprorly)
// .bashrc -> umask 022 (change permission permanently)

// SUB: Changing ownerships

// can only do as a root user
// TERM: chown sachin /home/joe/filename.js (change ownership to "sachin")
// TERM: chown sachin:groupName /home/joe/filename.js (change ownership and group of file/folder)
// TERM: chown -R sachin:groupName /media/driveName  (give full ownership of mounted drive to sachin and groupName group )

// SUB: Moving, copying, removing

// TERM: mv fileName1 fileName2 (move content of file1 to other file2)
// content of fileName2 is overridden
// TERM: mv -i fileName1 fileName2 (don't replace)
// TERM: cp -r folder1 folder2 (r -> recursively, to copy all files)
// by default in most linux terminals mv -i or cp -i or rm -i is aliased with mv and cp and rm 
// TERM: rm * (remove all files in folder)
// TERM: rm -r folder (remove no empty directory)
// TERM: rmdir folder (remove empty directoroy)
// TERM: rm -rf (f -> don't ask before deleting)
// TERM: \rm * (run "rm" without alias "rm -i")
// TERM: \mv -b file1 file2 (b -> keep a backup of file2 content coz mv unaliased will replace content) 

// SUB: finding files

// locate -> find files faster than "find" beacuse it search "database" instead of "filesystem"
// "locate" cannot find files added after database was updated
// database is updated once a day in linux automatically
// TERM: updatedb (update db manually)
// file of attached drives and temprory files are stored in filesystem 
// TERM: locate .bashrc (when used as root user it finds all files in all users directories)
// TERM: locate -i .bashrc (-i -> find regardless of case)
// "find" is more dynamic than "locate", can search by name, owner, date etc 
// with "find" the filesystem is updated insantly when you create or work on a file so get the latest files as well
// TERM: find /etc -ls (find all files under /etc directory, -ls -> give all details of found files)
// TERM: find /etc 2> /dev/null  (2> -> direct the error to /dev/null file coz user might not have access to some files in /etc so to redirect errors from output)
// TERM: find /etc -name "*.js" (find files by name or "-iname")
// TERM: find /etc -size +10M -size -1G
// TERM: find /home -user sachin (search by ownername)
// TERM: find /home \(-user sachin -or -user nile \) (-or -> search either)
// TERM: find /home -group group1 (search by groupname) 
// TERM: find /home -not -user sachin (-not -> search all files in /home whose owner is not sachin)
// TERM: find /home -perm -755 (search by permission of file, -755 -> "-" means search exact)
// TERM: find /home -perm \755 ("\" -> either owner or group or others shoiuld match)
// TERM: find /home -mmin -10 (find files whose content changed in last 10 min)
// TERM: find /home -ctime -3 (find files whose permission or ownership changed in last 3 days)
// TERM: find /home -atime +300 (find files which are not accessed in last 300 days)
// "-mmin" -> minute, "-mtime" -> days
// "-or", "-not" can also be used in all these examples
// TERM: find /home -user sachin -and -size +10M ("-and")
// with "find" we can run commands on found files using "-exec" and "-ok"
// "-ok" ask for conformation on all files "-exec" don't
// TERM: find /home -exec "I found {}" \;  ({} -> name of files, \; -> to end the command)
// TERM: find /home -exec du {} \; | sort  (du -> list size of file)
// "grep" -> search files by providing keyword which the filename contains
// TERM: grep -i desktop /home (-i -> case insensitive search, search "desktop" containg files in their name or content in /home directory) 
// TERM: grep -vi desktop /home (-v -> search file which don't contain)
// TERM: grep -ri desktop /home (-r -> list directories that contain)
// TERM: grep -ri --color root /etc (--color -> highlight "root")

// TOPIC: Processes

// Multitasking -> multiple programs running in background
// Process -> instance of running program 
// process is identified by process ID (PID)
// each process is accociated with particular user and group

// TERM: ps u (or "-u" -> show info about process)
// TTY -> terminal used
// STAT -> state of process, "R" -> running, "S" -> sleeping, "+" -> foreground
// VSZ -> size of memory allocated to process
// RSS -> size of memory actually occupied by process  
// START -> when the process started
// TIME -> total time used
// TERM: ps au (a -> process of all users)
// TERM: ps -eo pid,user,uid --sort=-vsz (-e -> all runnning process, -o -> show only specific info)

// "top" -> visual way of showing processes
// you should be root user to kill process of any user
// press "m" -> sort by memory, "p" -> sort by CPU, "1" -> show CPU usage of all CPUs (if you have), "r" -> reverse sort order, "u" -> enter username
// "r" -> type process id to renice(change priority) the processes, then type between -19 and 20 to change priority, only root user can provide negetive priority
// "k" -> kill process
// "System monitor" in gnome can also be used to manage processes
// "End" process -> terminate process cleanly
// "kill" -> terminate process even if it cannot be done cleanly

// TERM: find /root & (& -> run command in background to clear the terminal)
// it gives back [1] -> process number, 1352 -> PID
// TERM: jobs (show background processes) 
// [1]+ ("+" -> most recently added to bg)
// [1]- ('-' -> added to background just before the more recent process added to bg)
// TERM: jobs -l (-l -> show PID also)
// TERM: fg %1 (bring process number 1 to foreground)
// TERM: fg % (% -> most recent job)
// TERM: bg %1 (start a stopped process in background)

// SUB: killing process

// Signels -> SIGTERM (15) (kill process cleanly), SIGKILL (9) (kill process immediately cleanly or not), SIGHUP (1) (process to reread it's config file), SIGSTOP (17,19,23), SIGCONT (19,18, 25)
// can use signal name "SIGTERM" or signal number "15"
// TERM: kill -SIGKILL {PID} 
// the default is "SIGTERM"
// TERM: killall -15 testme ("killall" -> kill process by "name" instead of "PID")

// every process has a "nice" value between -20 and 19 to determine priority of process
// default is 0
// more the value the more CPU attention it gets
// normal user can only give between 0 and 19
// normal user can only increase the nice value 
// normal user can only set nice value on it's own processes
// TERM: nice -n +5 updatedb &  (set nice value of +5)
// TERM: renice -n +10 {PID} ("renice" -> change nice value of "running" proccess)

// TOPIC: Shell scripting

// shell scripts -> group of command contained in a file which we can run in one go
// this is how linux system works to initilize hardward and softwares on startup
// modern tools includes Ansible and Kubernetes

// NAME="sachin" (variable, no space between variable, = and valeu, variable = number,text,_)
// PI=3.14
// MYDATE=$(date) ("$()" -> use output of command as a value)
// NAME=\$HOME (\ or '' -> to literally show $HOME instead of HOME command's value)
// NAME="$HOME * `date`" (using "" -> $,`` and ! are treated specially but "*"(current file) is treated litrally i.e. "*")
// output -> NAME=/home/etc * 23/23/15

// values $0 --- $n are special 
// if the script "myscript" contains :  
// echo "The first argument is $1 and second argument is $2"
// if we run the command with foo and bar
// TERM:  myscript foo bar
// RESULT -> Thee first argument is foo and second argument is bar


