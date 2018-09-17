const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
const CLOSE_SIDEBAR = 'CLOSER_SIDEBAR';
const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';

const openSidebar = () => {
  return {
    type: OPEN_SIDEBAR,
  };
};

const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};

const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR,
  };
};

export {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  TOGGLE_SIDEBAR,
  openSidebar,
  closeSidebar,
  toggleSidebar,
};
