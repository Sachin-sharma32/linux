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
// .

