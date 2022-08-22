import './style.css';
import headerCont from './header';
import sidebarCont from './sidebar';

// Header
const header = document.querySelector('header');
header.innerHTML = headerCont;

// Sidebar
const sidebar = document.getElementById('sidebar');
sidebar.innerHTML = sidebarCont;

// Content