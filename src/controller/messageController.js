import messages from "../model/messages.js";
import { errorsCode, errorsMessage } from "../shared/errors.js";

class messagesController {
  static getMessages = (_, res) => {
    messages.find((err, messages) => {
      return err
        ? res.status(errorsCode.INTERNAL_SERVER_ERROR).send({
            message: `${errorsMessage.ERR_GET_MESSAGE} - ${err.message}`,
          })
        : res.status(errorsCode.OK).send(messages);
    });
  };

  static saveMessage = (req, res) => {
    const message = new messages(req.body);
    message.save((err) => {
      if (err) {
        const errMessage = `${errorsMessage.ERR_SAVE_MESSAGE} - ${err.message}`;
        res.status(errorsCode.INTERNAL_SERVER_ERROR).send({ errMessage });
      }

      res.status(errorsCode.CREATED).send(message);
    });
  };
  static deleteMessages = (_, res) => {
    messages.deleteMany({}, (err, _) => {
      return err
        ? res.status(errorsCode.INTERNAL_SERVER_ERROR).send({
            mensagem: `${errorsMessage.ERR_DELETE_MESSAGE} - ${err.message}`,
          })
        : res.json(`Mensagens removidas com sucesso`);
    });
  };
  static deleteMessage = (req, res) => {
    messages.deleteOne({ _id: req.params._id }, (err, messages) => {
      return err
        ? res.status(errorsCode.INTERNAL_SERVER_ERROR).send({
            mensagem: `${errorsMessage.ERR_DELETE_MESSAGE} - ${err.message}`,
          })
        : res.json(`Mensagem removida com sucesso`);
    });
  };
}

export default messagesController;
