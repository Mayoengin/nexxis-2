// src/constants/navigation.js

// Container IDs
export const CONTAINERS = {
  WELCOME: 'welcome',
  PRECISION: 'precision',
  FLEXIBILITY: 'flexibility',
  COLLABORATION: 'collaboration',
  TECHNOLOGY: 'technology',
  THREEDIMAGE: 'threedimage'
};

// Navigation map - defines the path forward and backward from each container
export const NAVIGATION_MAP = {
  [CONTAINERS.WELCOME]: {
    next: CONTAINERS.PRECISION,
    prev: null
  },
  [CONTAINERS.PRECISION]: {
    next: CONTAINERS.FLEXIBILITY,
    prev: CONTAINERS.WELCOME
  },
  [CONTAINERS.FLEXIBILITY]: {
    next: CONTAINERS.COLLABORATION,
    prev: CONTAINERS.PRECISION
  },
  [CONTAINERS.COLLABORATION]: {
    next: CONTAINERS.TECHNOLOGY,
    prev: CONTAINERS.FLEXIBILITY
  },
  [CONTAINERS.TECHNOLOGY]: {
    next: CONTAINERS.THREEDIMAGE,
    prev: CONTAINERS.COLLABORATION
  },
  [CONTAINERS.THREEDIMAGE]: {
    next: null,
    prev: CONTAINERS.TECHNOLOGY
  }
};

// Check if a container should show the "Next" button
export function hasNext(containerId) {
  return NAVIGATION_MAP[containerId]?.next !== null;
}

// Check if a container should show the "Previous" button
export function hasPrevious(containerId) {
  return NAVIGATION_MAP[containerId]?.prev !== null;
}

// Get the next container ID
export function getNextContainer(currentId) {
  return NAVIGATION_MAP[currentId]?.next || currentId;
}

// Get the previous container ID
export function getPreviousContainer(currentId) {
  return NAVIGATION_MAP[currentId]?.prev || currentId;
}