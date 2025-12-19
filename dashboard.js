document.addEventListener('DOMContentLoaded', function() {
  const orgList = document.getElementById('orgList');
  const logsBody = document.getElementById('logsBody');
  const modal = document.getElementById('orgModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalType = document.getElementById('modalType');
  const modalStatus = document.getElementById('modalStatus');
  const modalUsers = document.getElementById('modalUsers');
  const modalDesc = document.getElementById('modalDesc');
  const modalFounded = document.getElementById('modalFounded');
  const modalLocation = document.getElementById('modalLocation');
  const closeBtn = document.querySelector('.close');

  // Edit modal elements
  const editModal = document.getElementById('editModal');
  const editBtn = document.getElementById('editBtn');
  const editClose = document.getElementById('editClose');
  const editForm = document.getElementById('editForm');
  const cancelEdit = document.getElementById('cancelEdit');
  const editName = document.getElementById('editName');
  const editType = document.getElementById('editType');
  const editStatus = document.getElementById('editStatus');
  const editUsers = document.getElementById('editUsers');
  const editDesc = document.getElementById('editDesc');
  const editFounded = document.getElementById('editFounded');
  const editLocation = document.getElementById('editLocation');

  let currentEditingOrg = null;
  const organizations = [
    { name: 'TechCorp Inc.', type: 'Technology', status: 'Active', users: 150, desc: 'Leading provider of innovative tech solutions.', founded: '2010', location: 'San Francisco, CA' },
    { name: 'Global Solutions', type: 'Consulting', status: 'Active', users: 75, desc: 'Expert consulting services for businesses worldwide.', founded: '2005', location: 'New York, NY' },
    { name: 'Innovate Labs', type: 'Research', status: 'Pending', users: 20, desc: 'Cutting-edge research and development lab.', founded: '2018', location: 'Boston, MA' },
    { name: 'Data Dynamics', type: 'Data Analytics', status: 'Active', users: 200, desc: 'Advanced data analytics and insights platform.', founded: '2012', location: 'Austin, TX' },
    { name: 'SecureNet', type: 'Cybersecurity', status: 'Suspended', users: 50, desc: 'Comprehensive cybersecurity solutions.', founded: '2015', location: 'Seattle, WA' },
    { name: 'EcoFriendly Co.', type: 'Environmental', status: 'Active', users: 30, desc: 'Sustainable environmental solutions.', founded: '2019', location: 'Portland,' },
    { name: 'Cww Tech', type: 'Backend Developer', status: 'Suspended', users: 600, desc: 'Complex in Backend Org.', founded: '2022', location: 'Ghana OR' },
    { name: 'Tech Co.', type: 'Web Development', status: 'Active', users: 990, desc: 'Tech Crush solutions.', founded: '2025', location: 'Nigeria, Abj' }
  ];

  // WorkPruf activity logs
  const activityLogs = [
    { time: '2025-12-17 14:30', action: 'Login', user: 'admin@workpruf.com', details: 'Super Admin login successful' },
    { time: '2025-12-17 14:25', action: 'Organization Update', user: 'admin@workpruf.com', details: 'Updated TechCorp Inc. status to Active' },
    { time: '2025-12-17 14:20', action: 'User Added', user: 'admin@workpruf.com', details: 'Added new user to Global Solutions' },
    { time: '2025-12-17 14:15', action: 'Password Reset', user: 'user@techcorp.com', details: 'Password reset requested' },
    { time: '2025-12-17 14:10', action: 'Organization Created', user: 'admin@workpruf.com', details: 'Created EcoFriendly Co.' },
    { time: '2025-12-17 14:05', action: 'Login Failed', user: 'unknown@user.com', details: 'Invalid credentials' }
  ];

  // Render organizations
  organizations.forEach((org, index) => {
    const card = document.createElement('div');
    card.className = 'org-card';
    card.innerHTML = `
      <h3>${org.name}</h3>
      <p><strong>Type:</strong> ${org.type}</p>
      <p><strong>Status:</strong> <span class="status ${org.status.toLowerCase()}">${org.status}</span></p>
      <p><strong>Users:</strong> ${org.users}</p>
    `;
    card.addEventListener('click', () => openModal(org));
    orgList.appendChild(card);
  });

  // Render activity logs
  activityLogs.forEach(log => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${log.time}</td>
      <td>${log.action}</td>
      <td>${log.user}</td>
      <td>${log.details}</td>
    `;
    logsBody.appendChild(row);
  });

  function openModal(org) {
    modalTitle.textContent = org.name;
    modalType.textContent = org.type;
    modalStatus.innerHTML = `<span class="status ${org.status.toLowerCase()}">${org.status}</span>`;
    modalUsers.textContent = org.users;
    modalDesc.textContent = org.desc;
    modalFounded.textContent = org.founded;
    modalLocation.textContent = org.location;
    modal.style.display = 'block';
  }

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Edit functionality
  editBtn.addEventListener('click', () => {
    openEditModal(currentEditingOrg);
  });

  editClose.addEventListener('click', () => {
    editModal.style.display = 'none';
  });

  cancelEdit.addEventListener('click', () => {
    editModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === editModal) {
      editModal.style.display = 'none';
    }
  });

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();
    saveOrganizationEdits();
  });

  function openModal(org) {
    currentEditingOrg = org;
    modalTitle.textContent = org.name;
    modalType.textContent = org.type;
    modalStatus.innerHTML = `<span class="status ${org.status.toLowerCase()}">${org.status}</span>`;
    modalUsers.textContent = org.users;
    modalDesc.textContent = org.desc;
    modalFounded.textContent = org.founded;
    modalLocation.textContent = org.location;
    modal.style.display = 'block';
  }

  function openEditModal(org) {
    editName.value = org.name;
    editType.value = org.type;
    editStatus.value = org.status;
    editUsers.value = org.users;
    editDesc.value = org.desc;
    editFounded.value = org.founded;
    editLocation.value = org.location;
    editModal.style.display = 'block';
  }

  function saveOrganizationEdits() {
    const updatedOrg = {
      name: editName.value,
      type: editType.value,
      status: editStatus.value,
      users: parseInt(editUsers.value),
      desc: editDesc.value,
      founded: editFounded.value,
      location: editLocation.value
    };

    // Find and update the organization in the array
    const index = organizations.findIndex(org => org.name === currentEditingOrg.name);
    if (index !== -1) {
      organizations[index] = updatedOrg;
      
      // Re-render organizations
      orgList.innerHTML = '';
      organizations.forEach((org) => {
        const card = document.createElement('div');
        card.className = 'org-card';
        card.innerHTML = `
          <h3>${org.name}</h3>
          <p><strong>Type:</strong> ${org.type}</p>
          <p><strong>Status:</strong> <span class="status ${org.status.toLowerCase()}">${org.status}</span></p>
          <p><strong>Users:</strong> ${org.users}</p>
        `;
        card.addEventListener('click', () => openModal(org));
        orgList.appendChild(card);
      });

      // Add activity log entry
      const now = new Date();
      const timeString = now.toISOString().slice(0, 16).replace('T', ' ');
      const logEntry = {
        time: timeString,
        action: 'Organization Updated',
        user: 'admin@workpruf.com',
        details: `Updated ${updatedOrg.name}`
      };
      activityLogs.unshift(logEntry);
      
      // Re-render logs
      logsBody.innerHTML = '';
      activityLogs.forEach(log => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${log.time}</td>
          <td>${log.action}</td>
          <td>${log.user}</td>
          <td>${log.details}</td>
        `;
        logsBody.appendChild(row);
      });

      editModal.style.display = 'none';
      modal.style.display = 'none';
    }
  }
});