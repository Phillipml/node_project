import histories from "../model/histories.js";
import { errorsCode, errorshistory } from "../shared/errors.js";

class historiesController {
  static getHistories = (_, res) => {
    histories.find((err, histories) => {
      return err
        ? res.status(errorsCode.INTERNAL_SERVER_ERROR).send({
            history: `${errorshistory.ERR_GET_history} - ${err.history}`,
          })
        : res.status(errorsCode.OK).send(histories);
    });
  };

  static savehistory = (req, res) => {
    const history = new histories(req.body);
    history.save((err) => {
      if (err) {
        const errhistory = `${errorshistory.ERR_SAVE_history} - ${err.history}`;
        res.status(errorsCode.INTERNAL_SERVER_ERROR).send({ errhistory });
      }

      res.status(errorsCode.CREATED).send(history);
    });
  };
  static deleteHistories = (_, res) => {
    histories.deleteMany({}, (err, _) => {
      return err
        ? res.status(errorsCode.INTERNAL_SERVER_ERROR).send({
            mensagem: `${errorshistory.ERR_DELETE_history} - ${err.history}`,
          })
        : res.json(`Mensagens removidas com sucesso`);
    });
  };
  static deleteHistory = (req, res) => {
    histories.deleteOne({ _id: req.params._id }, (err, histories) => {
      return err
        ? res.status(errorsCode.INTERNAL_SERVER_ERROR).send({
            mensagem: `${errorshistory.ERR_DELETE_history} - ${err.history}`,
          })
        : res.json(`Mensagem removida com sucesso`);
    });
  };
}

export default historiesController;
