import { StyleSheet, Text, View } from 'react-native';

import InfoCard from '../components/InfoCard';
import ScreenContainer from '../components/ScreenContainer';
import { useAppContext } from '../contexts/AppContext';
import { colors } from '../theme/colors';

export default function ProfileScreen() {
  const { currentUser } = useAppContext();

  return (
    <ScreenContainer scroll contentStyle={styles.container}>
      <InfoCard
        eyebrow="Mi perfil principal"
        title={currentUser?.fullName || 'Sin usuario'}
        description="Supervisa el salon, acompana al equipo y manten la operacion alineada turno a turno."
        highlight
      />

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Pedidos hoy</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Mesas activas</Text>
        </View>
      </View>

      <InfoCard
        eyebrow="Rol"
        title={currentUser?.role || 'Equipo principal'}
        description={currentUser?.location}
      />
      <InfoCard eyebrow="Turno" title={currentUser?.shift || 'Turno general'} />
      <InfoCard
        eyebrow="Objetivo del dia"
        title="Servicio agil y cocina sincronizada"
        description="Prioriza tiempos de salida cortos, comunicacion clara y buena rotacion de mesas."
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 22,
    padding: 18,
    alignItems: 'center',
    gap: 6,
  },
  statNumber: {
    color: colors.primary,
    fontWeight: '800',
    fontSize: 30,
  },
  statLabel: {
    color: colors.textSoft,
    fontWeight: '600',
  },
});
