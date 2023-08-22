// you should be root user to  be a system admin

// ways to become root user:
// TERM: su - (become root user, "-" -> without this root user's environment cannot be read so some commands will not be available )
// TERM: sudo -i (become root user only to use onecommand)
// "Cockpit" -> broswer based graphical admin tool
// system-config-* tool -> used in older linux systems

// SUB: Roles of system admin

// filesystem
// software installation -> regular user can still do it but in their own directory
// add/remove user account
// manage network devices
// managing and configuring servers
// security features

// SUB: Cockpit

// TERM: sudo dnf install cockpit
// TERM: sustemctl enable --now cockpit.socket (enter as root user to enable cockpit socket) 
// open port 9090

// how directory for root user is "/root"
// other info related to root account in "/etc/passwd"

// inside /etc/passwd:
// root:x:0:0:root:/root:/bin/bash (root -> root user, 0 -> root user id, 0 -> root group id, /root -> root home directory, /bin/bash -> root shell path, x -> /etc/shadow (where encrypted passwords are saved))

// TERM: su - sachin (to login into any user)
// with "sudo" normal user can use admin features without admin password
// with "sudo" admin can check which user was performing admin rights 
// inside "/etc/sudoers" admin can define which user and what admin features he can use
// on ubuntu and fedora first user already has admin rights using "sudo"

// inside /etc/sudoers:
// sachin ALL=(ALL)  ALL   (give user "sachin" all admin rights)
// sachin ALL=(ALL) NOPASSWD: ALL  (admin rights without needing password)

// most of the administrative commands for root user are stored in "/usr/sbin"

// admin configuration files are stored in "home" directory or "/etc"
// most config files start with "."
// inside $HOME directory -> config files related to how user account behaves
// inside /etc -> basic config files

// "systemd" journal -> linux systems tracks themselves and keep error messages and log files in this jounal
// TERM: journalctl -> view systemd journal
// TERM: journalctl --list-boots (give boot IDs when system were started)
// TERM: journalctl -b {bootID} (info about particular boot)
// TERM: journalctl -k (error/logs from kernal)
// TERM: journalctl _SYSTEMD_UNIT=sshd.service  (about particular service)
// TERM: journalctl -a -f ("-f" -> show messages live, "-a" -> show all info about message)
// messages are generally stored in "/var/log" directory

// can use multiple admin accounts but the shell should be "/bin/bash"

// linux can automatically manage hardware but we can also manage them manually
// when linux boots, kernel detectes
// when linux boots, kernel detectes the hardware and loads the drives to run those devices
// TERM: dmesg (see what hardware were detected by kernel at boot time and find which one failed)
// "journalctl" can also be used to show log message from particular boot instance
// TERM: lsusb (info about connected usb devices to system)
// TERM: lsusb -v  (more info)
// TERM: lscpu (detials about processor)

// sometime you make need to load the hardware manually
// TERM: lsmod (which modules are currently loaded in your kernel)
// TERM: modeprobe {modulesName}  (to manually load a module, after restart the modules is remove and you have to load it again unless you define it in a start script when the system boots)
// TERM: rmmode {moduleName}  (remove a module)

// LATER:  TOPIC: Installing Linux (later)


// TOPIC: Managing software

// downloaded from fedora software repository
// can also download third party softwares
// most packages are only available to download through shell 
// with software app we cannot manage softwares on multiple systems 
// old way of downloading packages -> grab source code -> compile -> run 

// tarball -> old way of downloading software, uneffecient, have to download dependent software manually, software files spread across different directories, remove files manually to uninstall, cannot track version of software so difficult to update
// package managers solve this problem
// RPM package manager is used in fedora
// DEB -> used by debian based distros

// SUB: DEB

// holds software files and metadata in "ar" (archive) file 
// tools to download packages through DEB  -> aptitude, apt 

// SUB: RPM

// software files and metadata are stored in "rpm" file
// TERM: rpm -q firefox (result -> firefox-67.0-4.fc30.x86_64,  67.0 -> version, 4 -> release number (each time software is rebuild), fc30 -> ment for fedora version 30, x86_64 -> compiled for x86 64 bit systems)
// installed softwares are stored in RPM database locally
// TERM: rpm -qi firefox (get more info about software from RPM database)
// "rpm" command was used initially to manage software, downsides -> manually install dependencies, specify location everytime install software
// so "yum" was introduced
// "dnf" -> next generation of "yum"
// "yum" command has a symbolic link to "dnf", so typing either will work the same
// TERM: yum install firefox
// when any "yum" command runs it checks /etc/yum.conf (yum config file) for default settings
// "/etc/yum.repos.d" -> to find installed repos

// SUB: inside /etc/yum.conf or /etc/dnf.conf:

// gpgcheck=True  # 0 -> use package from other distros
// installonly_limit=3  # keep 3 versions of packages on this system
// clean_requirement_on_remove=True  # remove dependencies when removing package
// best=True # install the greatest version of package on update 

// man dnf.conf

// SUB: inside /etc/yum.repos.d/

// to enable repository place the files in this folder with ".repo" extension
// gpgkey -> location of package

// installing 3rd part repos:
// recommended to be installed using RPM fusion repository (safe):
// TERM: rpm -Uvh http://download1.rpmfusion.org/free/fedora/  (enable free RPM fusion, first become as root user)

// TERM: dnf search editor  (find package)
// TERM: dnf info emacs  (more info about package) 
// TERM: dnf provides dvdrecord (find package if you only know it's command)
// TERM: dnf list  installed
// TERM: dnf list available
// TERM: dnf deplist nvim  (dependencies)
// TERM: dnf install nvim
// TERM: dnf reinstall nvim (reinstall after deleting it's config file)
// TERM: dnf remove nvim

// TERM: dnf history (all installed package)
// TERM: dnf history info 12 (info about package at 12th index)
// TERM: dnf history undo 12 (uninstall)

// TERM: dnf check-update
// TERM: dnf update
// TERM: dnf grouplist | less  (see packages which are ment to be downloaded in group)
// TERM: dnf groupinfo nvim  (group details of package)
// TERM: dnf groupinstall nvim  (install package and it's memboer group packages)
// TERM: dnf groupremove nvim  (uninstall all packages in group)

// TERM: dnf clean packages  (clear RPM database cache, this removes the downloded packages after they are installed)
// TERM: dnf clean metadata
// TERM: dnf clean all
// these 3 commands should be used ocassionally

// TERM: dnf check  (check RPM database if corrupted)
// TERM: dnf --rebuilddb  (rebuild RPM database to solve the problem)

// TERM: yumdownloader firefox  (inspect a package without actually installing it)
// TERM: dnf download firefox  (to use dnf commands on this package)

// SUB: RPM

// can also use rpm to maintain package
// TERM: rpm -i {somename}.rpm
// TERM: rpm -Uhv {somename}.rpm  (-U -> update, -hv -> see output when package is updating)
// TERM: rpm -Fhv *.rpm  (-F -> install package if it existed in the past)
// TERM: rpm -Uhv --replacepkgs {somename}.rpm  (--replacepkgs -> reinstall package)
// TERM: rpm -Uhv --oldpackage {somename}.rpm  (--oldpackage -> replace package with older version)
// TERM: rpm -e nvim  (remove package)
// TERM: rpm -q nvim  (info about installed package)
// TERM: rpm -qip {somename}.rpm  (-i -> list of files, -p -> files, view info about all files in package)
// TERM: rpm -V nvim  (-V -> to check if package has been tempered with after installing, if you see letters or numbers instead of "." then it is temperted) 
// each letter or number has meaning -> google it
// TERM: rpm -i --replacepkgs {filename}.rpm  (restore package to original state)

// TOPIC: Managing user accounts 

// add account on fedora using "Cockpit"

// TERM: yum install cockpit -y
// TERM: systemctl enable --now cockpit.socket
// now add new account
// update info about an account

// first become root user:

// TERM: useradd -c "Sachin Sharma" sachin  (add using using terminal, -c -> command, sachin -> user name)
// result -> sachin:x:1002:1007:Sachin Sharma:/home/sachin:/bin/tcsh  (x -> dummy password, 1002 -> user ID, 1007 -> group ID, /bin/tcsh -> default shell)

// TERM: passwd sachin (set password)
// home directory is created based on user name
// see more options like "-c" on google
// 


