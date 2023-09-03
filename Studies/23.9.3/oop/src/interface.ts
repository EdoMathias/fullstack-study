interface Editable {
  edit(): void;
  print(): string;
}

interface Save {
  save(): string;
}

class Editor implements Editable, Save {
  edit(): void {
    console.log('called edit');
  }
  print(): string {
    return 'Printing';
  }
  save(): string {
    return 'Saved';
  }
}

function edit(obj: Editable) {
  obj.edit();
}
