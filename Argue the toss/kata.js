function anArgument(...arguments) {
  const numArgs = arguments.length;
  
  if(numArgs === 0){
    return "You didn't give me any arguments.";
  }
  
  if(numArgs === 1){
    return `You gave me 1 argument and it is "${arguments[0]}".`;
  }
  
  const joinedArgs = arguments.reduce((prevVal, curVal, ix) => {
    const separator = ix === 0 ?          ''      :  // Don't add anything at the start
                      ix === numArgs - 1? ' and ' : 
                                          ', '    ;
                                          
    return prevVal + separator + `"${curVal}"`;
  }, '');


  return `You gave me ${numArgs} arguments and they are ${joinedArgs}.`;
}
