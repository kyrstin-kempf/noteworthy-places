# Noteworthy Places: React / Rails API

## Description

Noteworthy Places allows a user to create an account and add new places that they want to bookmark. Places are listed by region and can be filtered by activity type. Places can be created, edited, and deleted while regions and locations can be added in relation to the place. 

On login, the user will see a list of their places listed by region with the option to see the place details such as the name, activity type, gps link, and website link.

![](NoteworthyPlaces.gif)

## Requirements

To run this application, make sure the following is installed:
- ruby 2.7.4
- node 16.16
- npm version 9.6.2

## How To Use

1. Fork and clone this repository
2. Run `bundle install`
3. Run `rails db:migrate`
4. Run `rails s` to start the backend on [http://localhost:3000](http://localhost:3000)
5. In another terminal, navigate to client directory `cd client`, then run `npm start` to start the frontend on [http://localhost:4000](http://localhost:4000).

To view Noteworthy Places without forking and cloning, visit [https://noteworthy-places.com](https://noteworthy-places.onrender.com)