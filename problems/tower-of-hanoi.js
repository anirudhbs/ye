function towerOfHanoi(numberOfDisks, fromRod, toRod, intermediateRod) {
  if(numberOfDisks === 1) {
    // eslint-disable-next-line no-undef
    console.log(`move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(numberOfDisks - 1, fromRod, intermediateRod, toRod);
  // eslint-disable-next-line no-undef
  console.log(`move disk ${numberOfDisks} from ${fromRod} to ${toRod}`);
  towerOfHanoi(numberOfDisks - 1, intermediateRod, toRod, fromRod);
}

towerOfHanoi(4, 'a', 'c', 'b'); // number of disks, initial rod, desitnation rod, the third rod
