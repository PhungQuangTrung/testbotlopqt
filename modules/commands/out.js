module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "manhG",
  description: "chỉ là rời nhóm theo ID thôi",
  commandCategory: "Hệ thống admin-bot",
  usages: "[ID nhóm] [Nội dung]",
  cooldowns: 5,
  dependencies: "",

};

module.exports.run = async function ({ api, Users, Threads, event, args }) {
  if (event.senderID != 100033478361032) return api.sendMessage(`🔰 Admin Phùng Quang Trung cảm ơn bạn đã dùng BOT 🔰`, event.threadID, event.messageID)
  var idbox = args[0];
  var reason = args.slice(1);
  if (!args[0]) return api.sendMessage(`${api.getCurrentUserID()}`, () =>
    api.sendMessage(`Tạm Biệt Các Cậu Nhé \n\n Tớ Đi đây🥺 `, event.threadID, () =>
      api.removeUserFromGroup(`${api.getCurrentUserID()}`, event.threadID)));
        api.sendMessage("Đã nhận lệnh out nhóm từ admin, lý do: " + reason.join(" "), idbox, () =>
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idbox, () =>
            api.sendMessage("Đã out box có id: " + idbox + " với lý do: " + reason.join(" "), event.threadID)))
}
