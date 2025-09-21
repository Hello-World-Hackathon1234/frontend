// In the render section, update the Goal Section:
{goal && goal.color && goal.icon && (
  <View style={styles.sectionCard}>
    <View style={styles.sectionHeader}>
      <View style={[styles.sectionIcon, { backgroundColor: (goal.color || '#000') + '15' }]}>
        <Text style={styles.sectionEmoji}>{goal.icon || ''}</Text>
      </View>
      <View style={styles.sectionHeaderText}>
        <Text style={styles.sectionTitle}>Your Goal</Text>
        <Text style={[styles.sectionValue, { color: goal.color || Colors.primary }]}>
          {goal.title || 'Not set'}
        </Text>
      </View>
    </View>
    <Text style={styles.sectionDescription}>{goal.description || ''}</Text>
  </View>
)}