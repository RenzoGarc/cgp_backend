import axios from "axios";
export class ReporteController {
  constructor() {}

  async createReporte(req, res, next) {
    let json = req.body;
    try {
      // console.log(json);
      let ss = await axios.post(
        "http://185.214.135.183:8080/print/print/buildreport.pdf",
        //   let ss = await axios.post("http://localhost:8080/print/print/buildreport.pdf",
        json,
        {
          responseType: "arraybuffer",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = ss.data;
      // console.log(json)
      // let data = await n2yo_service.getPrint(json);
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", "attachment; filename=name.Pdf");
      res.setHeader("Content-Length", data.length);
      return res.end(data);
    } catch (err) {
      return next(err);
    }
  }
}
