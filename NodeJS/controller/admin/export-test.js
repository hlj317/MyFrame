//导出
// let firstName = 'Michael';
// let lastName = 'Jackson';
// let year = 1958;
// export {firstName, lastName, year};

//导出
export function x(value){
	console.log(value+"#######");
}

export function y(value){
	console.log(value+"@@@@@@@@");
}

//导入
import * as obj from '../controller/admin/export-test';
obj.x(2);
obj.y(4);





