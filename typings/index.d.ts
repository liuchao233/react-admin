interface Urls extends Record<string, any> {

}

interface ListUrls extends Urls {
  list?: string;
  remove?: string;
}

interface FormUrls extends Urls {
  detail?: string;
  submit?: string;
  add?: string;
  update?: string;
}
