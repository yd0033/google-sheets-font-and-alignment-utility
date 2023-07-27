function adjustFontAndAlignment() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var range = sheet.getDataRange();

  // フォントサイズとフォントを指定
  var fontSize = 10;  // フォントサイズを調整する値
  var fontName = "Arial";  // フォントを指定

  // データ範囲内のセルに対してフォントサイズとフォントを設定
  range.setFontSize(fontSize);
  range.setFontFamily(fontName);

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
}