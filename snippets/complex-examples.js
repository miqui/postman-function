/**
{
  "company": {
    "name": "Tech Innovators Inc.",
    "address": {
      "street": "1234 Innovation Drive",
      "city": "Techville",
      "state": "CA",
      "zip": "94000"
    },
    "departments": [
      {
        "id": "d001",
        "name": "Research and Development",
        "employees": [
          {
            "id": "e001",
            "name": "Alice Johnson",
            "position": "Lead Scientist",
            "contact": {
              "email": "alice.johnson@techinnovators.com",
              "phone": "555-1234"
            },
            "projects": [
              {
                "id": "p001",
                "name": "Project Quantum",
                "status": "ongoing",
                "budget": 5000000,
                "timeline": {
                  "start": "2024-01-01",
                  "end": "2025-12-31"
                },
                "milestones": [
                  {
                    "id": "m001",
                    "name": "Phase 1 Completion",
                    "due_date": "2024-06-30",
                    "status": "completed"
                  },
                  {
                    "id": "m002",
                    "name": "Phase 2 Start",
                    "due_date": "2024-07-01",
                    "status": "upcoming"
                  }
                ]
              },
              {
                "id": "p002",
                "name": "Project Phoenix",
                "status": "planning",
                "budget": 3000000,
                "timeline": {
                  "start": "2024-09-01",
                  "end": "2026-08-31"
                },
                "milestones": [
                  {
                    "id": "m003",
                    "name": "Initial Research",
                    "due_date": "2024-12-31",
                    "status": "upcoming"
                  }
                ]
              }
            ]
          },
          {
            "id": "e002",
            "name": "Bob Smith",
            "position": "Research Scientist",
            "contact": {
              "email": "bob.smith@techinnovators.com",
              "phone": "555-5678"
            },
            "projects": []
          }
        ]
      },
      {
        "id": "d002",
        "name": "Marketing",
        "employees": [
          {
            "id": "e003",
            "name": "Carol Williams",
            "position": "Marketing Director",
            "contact": {
              "email": "carol.williams@techinnovators.com",
              "phone": "555-9101"
            },
            "campaigns": [
              {
                "id": "c001",
                "name": "New Product Launch",
                "budget": 200000,
                "timeline": {
                  "start": "2024-05-01",
                  "end": "2024-08-31"
                },
                "milestones": [
                  {
                    "id": "m004",
                    "name": "Initial Planning",
                    "due_date": "2024-05-15",
                    "status": "completed"
                  },
                  {
                    "id": "m005",
                    "name": "Media Buy",
                    "due_date": "2024-07-01",
                    "status": "upcoming"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}

**/

pm.test("Validate Departments Structure", function() {
    const jsonData = pm.response.json();
    const departments = jsonData.company.departments;
    pm.expect(departments).to.be.an('array').that.has.lengthOf(2);

    departments.forEach(department => {
        pm.expect(department).to.have.property('id');
        pm.expect(department).to.have.property('name');
        pm.expect(department).to.have.property('employees').that.is.an('array');
    });
});


pm.test("Validate Employees in Research and Development Department", function() {
    const jsonData = pm.response.json();
    const rndDepartment = jsonData.company.departments.find(dept => dept.name === "Research and Development");

    pm.expect(rndDepartment).to.be.an('object');
    pm.expect(rndDepartment.employees).to.be.an('array').that.has.lengthOf(2);

    const alice = rndDepartment.employees.find(emp => emp.name === "Alice Johnson");
    pm.expect(alice).to.be.an('object');
    pm.expect(alice.position).to.eql("Lead Scientist");
    pm.expect(alice.contact.email).to.eql("alice.johnson@techinnovators.com");
    pm.expect(alice.contact.phone).to.eql("555-1234");
    pm.expect(alice.projects).to.be.an('array').that.has.lengthOf(2);

    const bob = rndDepartment.employees.find(emp => emp.name === "Bob Smith");
    pm.expect(bob).to.be.an('object');
    pm.expect(bob.position).to.eql("Research Scientist");
    pm.expect(bob.contact.email).to.eql("bob.smith@techinnovators.com");
    pm.expect(bob.contact.phone).to.eql("555-5678");
    pm.expect(bob.projects).to.be.an('array').that.is.empty;
});


pm.test("Validate Company Information", function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData.company).to.have.property('name', 'Tech Innovators Inc.')
        .and.to.have.nested.property('address.street', '1234 Innovation Drive')
        .and.to.have.nested.property('address.city', 'Techville')
        .and.to.have.nested.property('address.state', 'CA')
        .and.to.have.nested.property('address.zip', '94000');
});


pm.test("Validate Departments Structure", function() {
    const jsonData = pm.response.json();
    pm.expect(jsonData.company).to.have.property('departments').that.is.an('array').with.lengthOf(2);

    jsonData.company.departments.forEach(department => {
        pm.expect(department).to.have.property('id').that.is.a('string')
            .and.to.have.property('name').that.is.a('string')
            .and.to.have.property('employees').that.is.an('array');
    });
});

pm.test("Validate Marketing Campaigns for Carol Williams", function() {
    const jsonData = pm.response.json();
    const marketingDepartment = jsonData.company.departments.find(dept => dept.name === "Marketing");
    const carol = marketingDepartment.employees.find(emp => emp.name === "Carol Williams");

    pm.expect(carol).to.be.an('object')
        .and.to.have.property('position', 'Marketing Director')
        .and.to.have.nested.property('contact.email', 'carol.williams@techinnovators.com')
        .and.to.have.nested.property('contact.phone', '555-9101')
        .and.to.have.property('campaigns').that.is.an('array').with.lengthOf(1);

    const newProductLaunch = carol.campaigns.find(camp => camp.name === "New Product Launch");
    pm.expect(newProductLaunch).to.be.an('object')
        .and.to.have.property('budget', 200000)
        .and.to.have.nested.property('timeline.start', '2024-05-01')
        .and.to.have.nested.property('timeline.end', '2024-08-31');

    const initialPlanning = newProductLaunch.milestones.find(ms => ms.name === "Initial Planning");
    pm.expect(initialPlanning).to.be.an('object')
        .and.to.have.property('due_date', '2024-05-15')
        .and.to.have.property('status', 'completed');

    const mediaBuy = newProductLaunch.milestones.find(ms => ms.name === "Media Buy");
    pm.expect(mediaBuy).to.be.an('object')
        .and.to.have.property('due_date', '2024-07-01')
        .and.to.have.property('status', 'upcoming');
});
