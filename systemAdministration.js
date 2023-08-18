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

// TOPIC: Installing Linux
