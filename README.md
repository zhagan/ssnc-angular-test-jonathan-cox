# ALPS Front-End Code Interview

## Starting

Please avoid submit code directly to this repository  before starting please create a fork.

```
git clone [your-fork-link]
```

Since this is a angular application you can use ng cli command to start and create components. to start developing use:

```
npm start
```

for more information about angular/cli visit: https://cli.angular.io

## Features

Using the current angular project without additional packages add the features below.

Feel free to make enhancements to improve the user experience as long as the described in the features is meet but also try to keep the code as simplest as possible.

### [Issue 1](https://github.com/zhagan/ssnc-angular-test-jonathan-cox/issues/1)
Update `app-people` component so that you can sort by column and each row in the table can be edited.

### [Issue 2](https://github.com/zhagan/ssnc-angular-test-jonathan-cox/issues/2)
When updating a person only 'Age' and `Department` can be changed and only the following departments can be selected: 
- Technology
- Accounting
- Human Resources
- Investment

### [Issue 3](https://github.com/zhagan/ssnc-angular-test-jonathan-cox/issues/3)
When editing persons on the same browser instance validate that the data is not overwritten by a recent change if so show a notification `*Warning: {firstName} has been recently changed. Please [click here] to update to the latest data.` If the data is not the latest and a editing is submitted show the following error: `*Error: Cannot update {person} since it has been recently changed. please update to the latest data or refresh the page.`

Note: All data persistence or syncronization if needed should be handled using only `Javascript` and `Angular`. There is no need to worry about compatiblity as long as the code works in `Google Chrome` or `Firefox`.

## Submitting Features

Make sure each commit is linked to the issue #:

```
git commit -m `commit reason for #{issue-number}`
```

When finalized send a pull request to [ssnc-angular-test-jonathan-cox](https://github.com/zhagan/ssnc-angular-test-jonathan-cox).

