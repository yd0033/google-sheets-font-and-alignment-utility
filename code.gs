function adjustFontAndAlignment() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var range = sheet.getDataRange();

  // フォントとフォントサイズとフォントカラーを指定
  var fontName = "Arial";  // フォントを指定
  var fontSize = 12;  // フォントサイズを調整する値
  var fontColor = "black" // フォントカラーを指定

  // データ範囲内のセルに対してフォントとフォントサイズとフォントカラーを設定
  range.setFontFamily(fontName);
  range.setFontSize(fontSize);
  range.setFontColor(fontColor);

  // ヘッダー（A列からG列）を水平方向のテキスト位置を中央に固定
  var headerRange = sheet.getRange("A1:G1");
  headerRange.setHorizontalAlignment("center");

  // A列のデータレンジを水平方向のテキスト位置を中央に固定
  var columnARange = sheet.getRange("A2:A" + sheet.getLastRow());
  columnARange.setHorizontalAlignment("center");

  // B列からF列のデータレンジを水平方向のテキストを左寄せに固定
  var columnBtoFRange = sheet.getRange("B2:F" + sheet.getLastRow());
  columnBtoFRange.setHorizontalAlignment("left");

  // G列のデータレンジを水平方向のテキスト位置を右寄せに固定
  var columnGRange = sheet.getRange("G2:G" + sheet.getLastRow());
  columnGRange.setHorizontalAlignment("right");

  // データ範囲内のセルに枠線を追加
  range.setBorder(true, true, true, true, true, true);
}