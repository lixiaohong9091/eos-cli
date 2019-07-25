inquirer.prompt([
  {
      name: 'description',
      message: 'Please enter the project description: '
  },
  {
      name: 'author',
      message: 'Please enter the author name: '
  }
]).then((answer) => {
  //...
});

import ora from 'ora';
let loading = ora('downloading template ...');
loading.start();
//download
loading.succeed(); //或 loading.fail();
