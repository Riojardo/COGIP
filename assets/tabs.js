import { getDataLimit } from "./get_data.js";

async function afficherLastInvoices() {
  const table = document.getElementById("lastInvoices").querySelector("tbody");

  const lastInvoices = await getDataLimit("./backend/api.php/invoices", 5);

  lastInvoices.forEach((last_invoices) => {
    const tr = document.createElement("tr");
    tr.className = "py-8 border-collapse";

    const td1 = document.createElement("td");
    td1.className = "pl-2 ";
    td1.innerText = last_invoices.ref;

    const td2 = document.createElement("td");
    td2.className = "pb-2";
    td2.innerText = last_invoices.date_due;

    const td3 = document.createElement("td");
    td3.className = "pb-2";
    td3.innerText = last_invoices.price;

    const td4 = document.createElement("td");
    td4.className = "pb-2";
    td4.innerText = last_invoices.company_name;

    const td5 = document.createElement("td");
    td5.className = "pb-2";
    td5.innerText = last_invoices.created_at;

    const td6 = document.createElement("td");
    td6.className = "pb-2";
    td6.innerText = last_invoices.updated_at;

    tr.append(td1, td2, td3, td4, td5, td6);
    table.append(tr);
  });
}

async function afficherLastContacts() {
  const table = document.getElementById("lastContacts").querySelector("tbody");

  const LastContacts = await getDataLimit("./backend/api.php/contacts", 5);

  LastContacts.forEach((last_contacts) => {
    const tr = document.createElement("tr");
    tr.className = "py-8 border-collapse";

    const td1 = document.createElement("td");
    td1.className = "pl-2";
    td1.innerText = last_contacts.name;

    const td2 = document.createElement("td");
    td2.className = "pb-2";
    td2.innerText = last_contacts.company_name;

    const td3 = document.createElement("td");
    td3.className = "pb-2";
    td3.innerText = last_contacts.email;

    const td4 = document.createElement("td");
    td4.className = "pb-2";
    td4.innerText = last_contacts.phone;

    const td5 = document.createElement("td");
    td5.className = "pb-2";
    td5.innerText = last_contacts.created_at;

    const td6 = document.createElement("td");
    td6.className = "pb-2";
    td6.innerText = last_contacts.updated_at;

    tr.append(td1, td2, td3, td4, td5, td6);
    table.append(tr);
  });
}

async function afficherLastCompanies() {
  const table = document.getElementById("lastCompanies").querySelector("tbody");

  const LastCompanies = await getDataLimit("./backend/api.php/companies", 5);

  LastCompanies.forEach((last_companies) => {
    const tr = document.createElement("tr");
    tr.className = "py-8 border-collapse";

    const td1 = document.createElement("td");
    td1.className = "pl-2 ";
    td1.innerText = last_companies.name;

    const td2 = document.createElement("td");
    td2.className = "pb-2";
    td2.innerText = last_companies.types_id_name;

    const td3 = document.createElement("td");
    td3.className = "pb-2";
    td3.innerText = last_companies.country;

    const td4 = document.createElement("td");
    td4.className = "pb-2";
    td4.innerText = last_companies.tva;

    const td5 = document.createElement("td");
    td5.className = "pb-2";
    td5.innerText = last_companies.created_at;

    const td6 = document.createElement("td");
    td6.className = "pb-2";
    td6.innerText = last_companies.updated_at;

    tr.append(td1, td2, td3, td4, td5, td6);
    table.append(tr);
  });
}

async function afficherAllInvoices() {
  const table = document.getElementById("allInvoices").querySelector("tbody");

  const AllInvoices = await getDataLimit("./backend/api.php/invoices");

  AllInvoices.forEach((all_invoices) => {
    const tr = document.createElement("tr");
    tr.className = "py-8 border-collapse";

    const td1 = document.createElement("td");
    td1.className = "pl-2 ";
    td1.innerText = all_invoices.ref;

    const td2 = document.createElement("td");
    td2.className = "pb-2";
    td2.innerText = all_invoices.date_due;

    const td3 = document.createElement("td");
    td3.className = "pb-2";
    td3.innerText = all_invoices.price;

    const td4 = document.createElement("td");
    td4.className = "pb-2";
    td4.innerText = all_invoices.company_name;

    const td5 = document.createElement("td");
    td5.className = "pb-2";
    td5.innerText = all_invoices.created_at;

    const td6 = document.createElement("td");
    td6.className = "pb-2";
    td6.innerText = all_invoices.updated_at;

    tr.append(td1, td2, td3, td4, td5, td6);
    table.append(tr);
  });
}

async function afficherAllContacts() {
  const table = document.getElementById("allContacts").querySelector("tbody");

  const AllContacts = await getDataLimit("./backend/api.php/contacts");

  AllContacts.forEach((all_contacts) => {
    const tr = document.createElement("tr");
    tr.className = "py-8 border-collapse";

    const td1 = document.createElement("td");
    td1.className = "pl-2 ";
    td1.innerText = all_contacts.name;

    const td2 = document.createElement("td");
    td2.className = "pb-2";
    td2.innerText = all_contacts.company_name;

    const td3 = document.createElement("td");
    td3.className = "pb-2";
    td3.innerText = all_contacts.email;

    const td4 = document.createElement("td");
    td4.className = "pb-2";
    td4.innerText = all_contacts.phone;

    const td5 = document.createElement("td");
    td5.className = "pb-2";
    td5.innerText = all_contacts.created_at;

    const td6 = document.createElement("td");
    td6.className = "pb-2";
    td6.innerText = all_contacts.updated_at;

    tr.append(td1, td2, td3, td4, td5, td6);
    table.append(tr);
  });
}

async function afficherAllCompanies() {
  const table = document.getElementById("allCompanies").querySelector("tbody");

  const AllCompanies = await getDataLimit("./backend/api.php/companies");

  AllCompanies.forEach((all_companies) => {
    const tr = document.createElement("tr");
    tr.className = "py-8 border-collapse";

    const td1 = document.createElement("td");
    td1.className = "pl-2 ";
    td1.innerText = all_companies.name;

    const td2 = document.createElement("td");
    td2.className = "pb-2";
    td2.innerText = all_companies.types_id_name;

    const td3 = document.createElement("td");
    td3.className = "pb-2";
    td3.innerText = all_companies.country;

    const td4 = document.createElement("td");
    td4.className = "pb-2";
    td4.innerText = all_companies.tva;

    const td5 = document.createElement("td");
    td5.className = "pb-2";
    td5.innerText = all_companies.created_at;

    const td6 = document.createElement("td");
    td6.className = "pb-2";
    td6.innerText = all_companies.updated_at;

    tr.append(td1, td2, td3, td4, td5, td6);
    table.append(tr);
  });
}

async function afficherLastContacts_dashboard() {
  const table = document
    .getElementById("lastContacts_dashboard")
    .querySelector("tbody");
  const lastContacts = await getDataLimit("./backend/api.php/contacts", 5);
  const rows = table.querySelectorAll("tr");

  lastContacts.forEach((last_contact, index) => {
    if (index < rows.length) {
      const cells = rows[index].querySelectorAll("td");
      cells[0].textContent = last_contact.name;
      cells[1].textContent = last_contact.company_name;
      cells[2].textContent = last_contact.email;
      cells[3].textContent = last_contact.phone;
      cells[4].textContent = last_contact.created_at;
      cells[5].textContent = last_contact.updated_at;

      const contactId = last_contact.id;

      const updateBtn = rows[index].querySelector(".updateBtn a");
      updateBtn.href = ` ./update-contacts.php?id=${contactId}`;

      const deleteBtn = rows[index].querySelector(".deleteBtn a");
      deleteBtn.href = `./backend/api.php/contact_delete?id=${contactId}`;
    }
  });
}

async function afficherLastCompanies_dashboard() {
  const table = document
    .getElementById("lastCompanies_dashboard")
    .querySelector("tbody");

  const lastCompanies = await getDataLimit("./backend/api.php/companies", 5);

  const rows = table.querySelectorAll("tr");

  lastCompanies.forEach((last_company, index) => {
    if (index < rows.length) {
      const cells = rows[index].querySelectorAll("td");
      cells[0].textContent = last_company.name;
      cells[1].textContent = last_company.country;
      cells[2].textContent = last_company.tva;
      cells[3].textContent = last_company.created_at;
      cells[4].textContent = last_company.updated_at;

      const compayId = last_company.id;
      const updateBtn = rows[index].querySelector(".updateBtn a");
      updateBtn.href = `./update-companies.php?id=${compayId}`;

      const deleteBtn = rows[index].querySelector(".deleteBtn a");
      deleteBtn.href = `./backend/api.php/companies_delete?id=${compayId}`;
  
    }
  });
}

async function afficherLastInvoices_dashboard() {
  const table = document
    .getElementById("lastInvoices_dashboard")
    .querySelector("tbody");

  const lastInvoices = await getDataLimit("./backend/api.php/invoices", 5);

  const rows = table.querySelectorAll("tr");

  lastInvoices.forEach((last_invoice, index) => {
    if (index < rows.length) {
      const cells = rows[index].querySelectorAll("td");
      cells[0].textContent = last_invoice.ref;
      cells[1].textContent = last_invoice.date_due;
      cells[2].textContent = last_invoice.price;
      cells[3].textContent = last_invoice.company_name;
      cells[4].textContent = last_invoice.created_at;
      cells[5].textContent = last_invoice.updated_at;

      const invoicesId = last_invoice.id;
      const updateBtn = rows[index].querySelector(".updateBtn a");
      updateBtn.href = `./update-invoices.php?id=${invoicesId}`;

      const deleteBtn = rows[index].querySelector(".deleteBtn a");
      deleteBtn.href = `./backend/api.php/invoices_delete?id=${invoicesId}`;
    }
  });
}

async function main() {
  afficherLastInvoices();
  afficherLastContacts();
  afficherLastCompanies();
  afficherAllInvoices();
  afficherAllContacts();
  afficherAllCompanies();
  afficherLastContacts_dashboard();
  afficherLastInvoices_dashboard();
  afficherLastCompanies_dashboard();
}

main();
