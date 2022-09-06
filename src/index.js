import './style.css';
import headerCont from './header';
import * as sidebarMod from './sidebar';

// Header
const header = document.querySelector('header');
header.innerHTML = headerCont;

// Sidebar
const sidebar = document.getElementById('sidebar');
sidebar.innerHTML = sidebarMod.sidebarCont;
sidebarMod.addProject();
sidebarMod.popList();

// Content