---
title: Arduino超音波感測音箱
date: 2022-11-22 23:52:51
tag: Arduino
categories: 
    - 日常
sticky: 
comments: true
toc: true
---
此為「資訊系統實驗」課程的期末作業，尚未完成。<!--more-->

先放個目前的程式碼在這

{% collapse C++ open %}
```cpp
#include "Arduino.h"
#include "SoftwareSerial.h"
#include "DFRobotDFPlayerMini.h"

SoftwareSerial mySoftwareSerial(10, 11); // RX, TX
DFRobotDFPlayerMini myDFPlayer;
void printDetail(uint8_t type, int value);

# define ACTIVATED LOW

int buttonPause = 3;
//int buttonPrevious = 4;
//int buttonNext = 5;
int xPin = A0;
int yPin = A1;
int posX = 0;
int posY = 0;
int Volume = 0;
//int buttonVolume = A0;
boolean isPlaying = true;

void setup () {
  Serial.begin(115200);
  mySoftwareSerial.begin(9600);
  delay(300);
  pinMode(buttonPause, INPUT);
  digitalWrite(buttonPause,HIGH);
  // pinMode(buttonNext, INPUT);
  // digitalWrite(buttonNext,HIGH);
  // pinMode(buttonPrevious, INPUT);
  // digitalWrite(buttonPrevious,HIGH); 

  Serial.println("Entry...");
  
  Serial.println();
  Serial.println(F("Initializing Player "));
  
  if (!myDFPlayer.begin(mySoftwareSerial)) {  //Use softwareSerial to communicate with mp3.
    Serial.println(F("Unable to begin:"));
    Serial.println(F("1.Please recheck the connection!"));
    Serial.println(F("2.Please insert the SD card!"));
    while(true);
  }
  Serial.println(F("MP3 Player online."));
  
  myDFPlayer.setTimeOut(500); //Set serial communictaion time out 500ms
  
  myDFPlayer.setTimeOut(500); //Set serial communictaion time out 500ms
  
  myDFPlayer.volume(10);  //Set volume value (0~30).
  myDFPlayer.EQ(DFPLAYER_EQ_NORMAL);

  myDFPlayer.start();
  myDFPlayer.enableLoopAll();
  
}

void loop () { 
 posX = analogRead(xPin);
 posY = analogRead(yPin);
 posX = map(posX, 0, 1023, -512, 512);
 posY = map(posY, 0, 1023, -512, 512);
 Serial.print(posX);
 Serial.print(" ");
 Serial.print(posY);
 Serial.println("");
 if (digitalRead(buttonPause) == ACTIVATED)  //暫停播放按鍵
  {
    if(isPlaying)
    {
      myDFPlayer.pause();
      isPlaying = false;
    }else
    {
      isPlaying = true;
      myDFPlayer.start();
    }
  }

 if (posY > 400) //切換下一首按鍵
  {
   
    if(isPlaying)
    {
      myDFPlayer.next();    
      delay(500);
    }
  }

   if (posY < -400)  //切換前一首按鍵
  {
    if(isPlaying)
    {
      myDFPlayer.previous(); 
      delay(500);
    }
  }
  //int Volume = analogRead(buttonVolume) / 34.1;
  //myDFPlayer.volume(Volume);  //設定指定音量. From 0 to 30
  if(posX >= 400 && Volume < 20)
    Volume += 1;
  else if(posX <= -400 && Volume > 0)
    Volume -= 1;
  myDFPlayer.volume(Volume);

 if (myDFPlayer.available()) {
    printDetail(myDFPlayer.readType(), myDFPlayer.read()); //Print the detail message from DFPlayer to handle different errors and states.
  }
  
  delay(300);
}



void printDetail(uint8_t type, int value){
  switch (type) {
    case TimeOut:
      Serial.println(F("Time Out!"));
      break;
    case WrongStack:
      Serial.println(F("Stack Wrong!"));
      break;
    case DFPlayerCardInserted:
      Serial.println(F("Card Inserted!"));
      break;
    case DFPlayerCardRemoved:
      Serial.println(F("Card Removed!"));
      break;
    case DFPlayerCardOnline:
      Serial.println(F("Card Online!"));
      break;
    case DFPlayerUSBInserted:
      Serial.println("USB Inserted!");
      break;
    case DFPlayerUSBRemoved:
      Serial.println("USB Removed!");
      break;
    case DFPlayerPlayFinished:
      Serial.print(F("Number:"));
      Serial.print(value);
      Serial.println(F(" Play Finished!"));
      break;
    case DFPlayerError:
      Serial.print(F("DFPlayerError:"));
      switch (value) {
        case Busy:
          Serial.println(F("Card not found"));
          break;
        case Sleeping:
          Serial.println(F("Sleeping"));
          break;
        case SerialWrongStack:
          Serial.println(F("Get Wrong Stack"));
          break;
        case CheckSumNotMatch:
          Serial.println(F("Check Sum Not Match"));
          break;
        case FileIndexOut:
          Serial.println(F("File Index Out of Bound"));
          break;
        case FileMismatch:
          Serial.println(F("Cannot Find File"));
          break;
        case Advertise:
          Serial.println(F("In Advertise"));
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  
}
```
{% endcollapse %}