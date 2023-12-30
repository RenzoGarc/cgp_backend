// import excel from "exceljs/dist/es5/index.js";

// export class ReportesController {
//   constructor() {}

//   async descargarExcel(req, res) {
//     const { data, columnas, titulo } = req.body;
//     try {
//       let workbook = new excel.Workbook();
//       let worksheet = workbook.addWorksheet(titulo);

//       const exportarTempo = [];
//       for (let index in data) {
//         // console.log('rows : ', data[index]);
//         const newData = {};
//         for (let index2 in columnas) {
//           // console.log(columnas[index2]);
//           const field = columnas[index2];
//           const index3 = parseInt(index2) + 1;
//           newData[index3] = data[index][field];
//         }
//         // console.log('newdata', newData);
//         exportarTempo.push(newData);
//       }

//       const columns = [];
//       for (let index in columnas) {
//         const element = columnas[index];
//         const newColumns = {};
//         newColumns.header = element;
//         newColumns.key = (parseInt(index) + 1).toString();
//         newColumns.width = 30;
//         columns.push(newColumns);
//       }
//       worksheet.columns = columns;

//       const pintado = [
//         { cantidad: 1, celda: "A1" },
//         { cantidad: 2, celda: "B1" },
//         { cantidad: 3, celda: "C1" },
//         { cantidad: 4, celda: "D1" },
//         { cantidad: 5, celda: "E1" },
//         { cantidad: 6, celda: "F1" },
//         { cantidad: 7, celda: "G1" },
//         { cantidad: 8, celda: "H1" },
//         { cantidad: 9, celda: "I1" },
//         { cantidad: 10, celda: "J1" },
//         { cantidad: 11, celda: "K1" },
//         { cantidad: 12, celda: "L1" },
//         { cantidad: 13, celda: "M1" },
//         { cantidad: 14, celda: "N1" },
//         { cantidad: 15, celda: "O1" },
//         { cantidad: 16, celda: "P1" },
//         { cantidad: 17, celda: "Q1" },
//         { cantidad: 18, celda: "R1" },
//         { cantidad: 19, celda: "S1" },
//         { cantidad: 20, celda: "T1" },
//         { cantidad: 21, celda: "U1" },
//         { cantidad: 22, celda: "V1" },
//         { cantidad: 23, celda: "W1" },
//         { cantidad: 24, celda: "X1" },
//         { cantidad: 25, celda: "Y1" },
//         { cantidad: 26, celda: "Z1" },
//         { cantidad: 27, celda: "AA1" },
//         { cantidad: 28, celda: "AB1" },
//         { cantidad: 29, celda: "AC1" },
//         { cantidad: 30, celda: "AD1" },
//         { cantidad: 31, celda: "AE1" },
//         { cantidad: 32, celda: "AF1" },
//         { cantidad: 33, celda: "AG1" },
//         { cantidad: 34, celda: "AH1" },
//         { cantidad: 35, celda: "AI1" },
//         { cantidad: 36, celda: "AJ1" },
//         { cantidad: 37, celda: "AK1" },
//         { cantidad: 38, celda: "AL1" },
//         { cantidad: 39, celda: "AM1" },
//       ];

//       for (let index = 1; index < columns.length + 1; index++) {
//         const celda = pintado.filter(
//           (elements) => elements.cantidad === parseInt(index)
//         );
//         if (celda[0].celda) {
//           // console.log(celda[0].celda);
//           worksheet.getCell(celda[0].celda).fill = {
//             type: "pattern",
//             pattern: "solid",
//             fgColor: { argb: "A3E4D7" },
//           };
//         }
//       }

//       worksheet.addRows(exportarTempo);

//       res.setHeader(
//         "Content-Type",
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
//       );
//       res.setHeader(
//         "Content-Disposition",
//         "attachment; filename=" + titulo + ".xlsx"
//       );

//       return workbook.xlsx.write(res).then(function () {
//         res.status(200).end();
//       });
//     } catch (error) {
//       res.json({
//         status: "error",
//         message: "Error en el servidor " + error,
//       });
//     }
//   }
// }
