function getRealFloor(n) {
  n -= n > 12? 1 : 0; // No 13th floor
  n -= n > 0? 1 : 0;  // 1st floor = ground
  return n;
}