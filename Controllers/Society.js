import admin from 'firebase-admin';
//add
const addSociety = async (req, res) => {
  const db = admin.database();
  try {
    const {
      user,
      company,
      societyName,
      address,
      societyStampNo,
      societyMobileNo,
      registrationNo,
      billingSignatory,
      fromEmailID,
      fromPassword,
      pan,
      tan,
      gst,
      gstRate,
      gstAmount,
    } = req.body;

    // Create a new society object
    const newSociety = {
      user,
      company,
      societyName,
      address,
      societyStampNo,
      societyMobileNo,
      registrationNo,
      billingSignatory,
      fromEmailID,
      fromPassword,
      pan,
      tan,
      gst,
      gstRate,
      gstAmount,
    };
    // Use push() to generate a new unique key for society
    const societyKey = admin.database().ref('/society').push().key;

    // Use set() with the generated key
    await admin.database().ref('/society').child(societyKey).set(newSociety);

    // Fetch current society names and update with the new one
    const societyNamesSnapshot = await admin
      .database()
      .ref('/societyNames')
      .once('value');
    let societyNames = societyNamesSnapshot.val() || {};
    societyNames[societyKey] = societyName || ''; // Update with the new name

    // Use set() to update societyNames
    await admin.database().ref('/societyNames').set(societyNames);

    res.status(201).json({
      message: 'Society data and names created successfully',
      societyId: societyKey, // Use the generated key
      societyNames: societyName,
    });
  } catch (error) {
    console.error('Error creating society data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default addSociety;
//search
export const searchSociety = async (req, res) => {
  const db = admin.database();
  const societyRef = db.ref('/society');

  try {
    const { userCategory } = req.params;

    // Check if userCategory is valid (e.g., "superadmin", "yellow")
    if (userCategory !== 'superadmin' && userCategory !== 'yellow') {
      return res.status(400).json({ error: 'Invalid user category' });
    }

    // Perform a query to get society names based on userCategory
    const querySnapshot = await societyRef
      .orderByChild('user')
      .equalTo(userCategory)
      .once('value');
    const societyNames = [];

    querySnapshot.forEach((societySnapshot) => {
      societyNames.push(societySnapshot.child('societyName').val());
    });

    res.status(200).json({ societyNames });
  } catch (error) {
    console.error('Error fetching society names:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getSocietyById = async (req, res) => {
  const db = admin.database();
  const societyRef = db.ref('/society');
  try {
    const { societyId } = req.params;

    const snapshot = await societyRef.child(societyId).once('value');

    if (!snapshot.exists()) {
      return res.status(404).json({ error: 'Society not found' });
    }

    const societyData = snapshot.val();

    res.json({ societyData, societyId });
  } catch (error) {
    console.error('Error fetching society by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Update society details
export const updateSociety = async (req, res) => {
  const db = admin.database();
  const societyRef = db.ref('/society');
  try {
    const { societyId } = req.params;
    const updatedSocietyData = req.body;

    // Update the society data
    await societyRef.child(societyId).update(updatedSocietyData);

    res.json({ message: 'Society data updated successfully', societyId });
  } catch (error) {
    console.error('Error updating society data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
export const getallSociety = async (req, res) => {
  const db = admin.database();
  const societyNamesRef = db.ref('/societyNames');

  try {
    const snapshot = await societyNamesRef.once('value');

    const societyList = Object.entries(snapshot.val() || {}).map(
      ([societyId, societyName]) => ({
        societyId,
        societyName,
      })
    );

    res.json({ Society: societyList });
  } catch (error) {
    console.error('Error fetching all societies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
